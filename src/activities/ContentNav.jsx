import React from "react";
import { useContext } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import "./../layout/ContentNav.css";
import Collapsible from "react-collapsible";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Link } from "react-router-dom";
import logo from "../images/Logo";

export default function ContentNav() {
  const { contentState, dispatch } = useContext(ContentContext);
  return (
    <Menu
      burgerButtonClassName={"content-burger-btn"}
      customBurgerIcon={<img src={logo} />}
      itemListClassName={"content-item-list"}
      itemClassName={"content-item"}
    >
      <Collapsible trigger="Great to meet you">
        <Link
          id="great_to_meet_you"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "Great To Meet You",
              },
            });
            // dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "Great To Meet You",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="Your brain is amazing">
        <Link
          id="your_brain_is_amazing"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "Your Brain is Amazing",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "Your Brain is Amazing",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="Your feelings matter" className="locked">
        <Link
          id="your_feelings_matter"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "Your Feelings Matter",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "Your Feelings Matter",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're not alone" className="locked">
        <Link
          id="your_not_alone"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You're Not Alone",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You're Not Alone",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're safe" className="locked">
        <Link
          id="your_safe"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You're Safe",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You're Safe",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're unique" className="locked">
        <Link
          id="your_unique"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You're Unique",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You're Unique",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You're brave" className="locked">
        <Link
          id="your_brave"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You're Brave",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You're Brave",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You belong here" className="locked">
        <Link
          id="you_belong_here"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You Belong Here",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You Belong Here",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="The Future Is Bright" className="locked">
        <Link
          id="the_future_is_bright"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "The Future Is Bright",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "The Future Is Bright",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
      <Collapsible trigger="You Are A Wonder" className="locked">
        <Link
          id="you_are_a_wonder"
          className="Collapsible__contentInner "
          onClick={() => {
            return dispatch({
              type: ACTIONS.SET_MULTIPLE,
              payload: {
                current_section: "You Are A Wonder",
              },
            });
            // return dispatch({
            //   type: ACTIONS.UPDATE_CURRENT_SECTION,
            //   current_section: "You Are A Wonder",
            // });
          }}
        >
          <Link
            id="play"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "play",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "play",
              // })
            }
          >
            Play Den
          </Link>
          <Link
            id="think"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "think",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "think",
              // })
            }
          >
            Think Bank
          </Link>
          <Link
            id="make"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "make",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "make",
              // })
            }
          >
            Make Station
          </Link>
          <Link
            id="wonder"
            className="menu-item"
            to="#"
            onClick={
              () =>
                dispatch({
                  type: ACTIONS.SET_MULTIPLE,
                  payload: {
                    current_subsection: "wonder",
                  },
                })
              // dispatch({
              //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
              //   current_subsection: "wonder",
              // })
            }
          >
            Wonder Tree
          </Link>
        </Link>
      </Collapsible>
    </Menu>
  );
}
