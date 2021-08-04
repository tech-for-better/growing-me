import React from "react";
import { useContext } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
// import "./../Layout/NavMenu.css";
import "./../Layout/ContentNav.css";
import Collapsible from "react-collapsible";
import { ContentContext } from "../Content";
import { ACTIONS } from "../Content";
import { Link } from "react-router-dom";

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
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Great To Meet You",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="Your brain is amazing">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Your Brain is Amazing",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="Your feelings matter">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "Your Feelings Matter",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're not alone">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Not Alone",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're safe">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Safe",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're unique">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Unique",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're brave">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You're Brave",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You belong here">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You Belong Here",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="The Future Is Bright">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "The Future Is Bright",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You Are A Wonder">
        <Link
          className="Collapsible__contentInner "
          onClick={() => {
            console.log("great to meet you clicked");
            return dispatch({
              type: ACTIONS.UPDATE_CURRENT_SECTION,
              new_section: "You Are A Wonder",
            });
          }}
        >
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "play",
              })
            }
          >
            Play Den
          </Link>
          <Link
            id="home"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "think",
              })
            }
          >
            Think Bank
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "make",
              })
            }
          >
            Make Station
          </Link>
          <Link
            id="adult-profile"
            className="menu-item"
            to="#"
            onClick={() =>
              dispatch({
                type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
                new_sub_section: "wonder",
              })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
    </Menu>
  );
}
