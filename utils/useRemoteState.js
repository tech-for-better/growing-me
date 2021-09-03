import { useReducer, useRef, useEffect } from "react";
import _ from "lodash";

function reducer(state, action) {
  switch (action.type) {
    // When the hook is first called
    case "LOAD": {
      return { ...state, status: "loading" };
    }
    // When LOAD finishes fetching initial remote data
    case "RESOLVE_LOAD": {
      console.log("RESOLVE_LOAD data:action.data", action.data);
      if (!action.data.profile && !action.data.tree) {
        return { status: "success", data: state.data, error: null };
      }
      return { status: "success", data: action.data, error: null };
    }
    // When `setState` is called
    case "UPDATE": {
      // to prevent race conditions
      // if we're in the middle of previous update
      // then don't allow the next one
      if (state.status === "updating") {
        return state;
      }

      // merge new key/val into data
      // const data = { ...state.data, ...action.data };
      // const data = Object.assign(state.data, action.data);
      const data = _.merge(state.data, action.data);
      console.log("USE_REMOTE UPDATE data", data);
      console.log("USE_REMOTE UPDATE state", state);
      console.log("USE_REMOTE UPDATE action", action);
      return {
        status: "updating",
        data, // update data immediately
        error: null,
      };
    }
    // When UPDATE finishes updating remote data
    case "RESOLVE_UPDATE": {
      console.log("RESOLVE_UPDATE", state);
      return {
        status: "success",
        data: state.data, // keep data from before
        error: null,
      };
    }
    // When a promise rejects
    case "REJECT": {
      return { ...state, status: "fail", error: action.error };
    }
    default:
      return state;
  }
}

const initialState = {
  status: "loading",
  data: {
    tree: {
      tree_location: null,
      background: null,
      boxes: {},
    },
    gallery: {
      images: [],
    },
    profile: {
      adult_name: null,
      avatar_url: null,
      child_name: "child",
      child_avatar: "./../assets/fluffy_visitors.svg",
    },
    progress: {
      unlocked: ["Great To Meet You"],
    },
  },
  error: null,
};

export default function useRemoteState({ load, update }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE in useRemotestate", state);
  const tempData = useRef(null);

  useEffect(() => {
    let cancel = false;

    async function runEffects() {
      try {
        switch (state.status) {
          // when hook first runs (load initial data)
          case "loading": {
            const data = await load();
            console.log("data in runeffects await load", data);
            console.log("STATE in end runEffects loading", state);
            if (!cancel) dispatch({ type: "RESOLVE_LOAD", data });
            break;
          }
          // after an update is sent using the `setState` function below
          case "updating": {
            await update(tempData.current);
            // all we care about is that it succeeded
            // since we already optimistically updated state.data
            if (!cancel) dispatch({ type: "RESOLVE_UPDATE" });
            break;
          }
        }
      } catch (error) {
        if (!cancel) dispatch({ type: "REJECT", error });
      }
    }
    console.log("STATE in end runEffects", state);
    runEffects();
    console.log("STATE in end runEffects", state); // state changes here
    // stop any further state updates if this effect is cleaned up
    return () => (cancel = true);
  }, [state.status, load, update]);

  const setState = (updater) => {
    const data = typeof updater === "function" ? updater(state.data) : updater;
    tempData.current = data;
    dispatch({ type: "UPDATE", data });
  };

  console.log("STATE end of useRemoteState fn", state);
  return [state, setState];
}
