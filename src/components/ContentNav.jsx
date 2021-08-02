import React from "react";
import { useContext } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
// import "./../Layout/NavMenu.css";
import "./../Layout/ContentNav.css";
import Collapsible from "react-collapsible";
import { ContentContext } from "../Content";
import { ACTIONS } from "../Content";

export default function ContentNav() {
  const { state, dispatch } = useContext(ContentContext);
  return (
    <Menu
      // noOverlay
      burgerButtonClassName={"content-burger-btn"}
      customBurgerIcon={<img src="logo.svg" />}
      itemListClassName={"content-item-list"}
      itemClassName={"content-item"}
    >
      <Collapsible trigger="Great to meet you">
        {/* <a
          className="dsfjskdjf"
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Great To Meet You",
            });
          }}
        ></a> */}
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="Your brain is amazing">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="Your feelings matter">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're not alone">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're safe">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're unique">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're brave">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You belong here">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="The future is bright">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You are a wonder">
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "play",
            })
          }
        >
          Play Den
        </a>
        <a
          id="home"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "think",
            })
          }
        >
          Think Bank
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "make",
            })
          }
        >
          Make Station
        </a>
        <a
          id="adult-profile"
          className="menu-item"
          href="#"
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              new_sub_section: "wonder",
            })
          }
        >
          Wonder Tree
        </a>
      </Collapsible>
    </Menu>
  );
}
