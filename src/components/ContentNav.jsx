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
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Great To Meet You",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="Your brain is amazing">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Your Brain is Amazing",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="Your feelings matter">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Your Feelings Matter",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You're not alone">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Not Alone",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You're safe">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Safe",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You're unique">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Unique",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You're brave">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Brave",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You belong here">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You Belong Here",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="The Future Is Bright">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "The Future Is Bright",
            });
          }}
        >
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
        </a>
      </Collapsible>
      <Collapsible trigger="You Are A Wonder">
        <a
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You Are A Wonder",
            });
          }}
        >
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
        </a>
      </Collapsible>
    </Menu>
  );
}
