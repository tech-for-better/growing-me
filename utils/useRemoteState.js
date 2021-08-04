import { useReducer, useRef, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    // When the hook is first called
    case "LOAD": {
      return { ...state, status: "loading" };
    }
    // When LOAD finishes fetching initial remote data
    case "RESOLVE_LOAD": {
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
      const data = { ...state.data, ...action.data };
      return {
        status: "updating",
        data, // update data immediately
        error: null,
      };
    }
    // When UPDATE finishes updating remote data
    case "RESOLVE_UPDATE": {
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
      treeLocation: null,
      background: null,
      growing: null,
      whoAround: null,
      growing_coords: { left: 80, top: 20 },
      whoAround_coords: { left: 100, top: 20 },
      boxes: {
        a: { top: 0, left: 2, isGrowing: true },
        b: { top: 1, left: 3, isGrowing: false },
      },
    },
    gallery: {
      images: [],
    },
  },
  error: null,
};

export default function useRemoteState({ load, update }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const tempData = useRef(null);

  useEffect(() => {
    let cancel = false;

    async function runEffects() {
      try {
        switch (state.status) {
          // when hook first runs (load initial data)
          case "loading": {
            const data = await load();
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
    runEffects();

    // stop any further state updates if this effect is cleaned up
    return () => (cancel = true);
  }, [state.status, load, update]);

  const setState = (updater) => {
    const data = typeof updater === "function" ? updater(state.data) : updater;
    tempData.current = data;
    dispatch({ type: "UPDATE", data });
  };

  return [state, setState];
}
