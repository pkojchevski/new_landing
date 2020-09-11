import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaHome } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import Environmental from '../../assets/images/Environmental_text.png';
import Cultural from '../../assets/images/cultural_text.png';
import Social from '../../assets/images/social_text.png';
import { useHistory } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import SearchBox from "./SearchBox/SearchBox";
import SocialIcons from "../SocialIcons/SocialIcons";

function Header() {
  const [isDestinationsOpen, setDestinationsIsOpen] = useState(false);
  const [isTopicsOpen, setTopicsIsOpen] = useState(false);


  const topicsToggle = () => {
    setTopicsIsOpen(!isTopicsOpen);
  };

  const destinationsToggle = () => {
    setDestinationsIsOpen(!isDestinationsOpen);
  };

  const history = useHistory();
  const goToHome = () => {
    history.push("/");
    window.location.href = "/";
  };

  return (
    <div className={classes.Header}>
      <Navbar
        className={classes.Move}
        expand="md"
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          color: "#054D55",
          position: "relative",
        }}
      >
        <NavbarBrand href="/">
          <FaHome style={{ color: "#054D55", marginTop: "-4px" }} />
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <Dropdown nav inNavbar isOpen={isDestinationsOpen} toggle={destinationsToggle}>
            <DropdownToggle
              nav
              className={classes.Toggle}
            >
              {isDestinationsOpen ? (
                <div className={classes.MenuTitleOpen}
                >
                  DESTINATIONS
                  <FaCaretUp
                    className={classes.Play}
                  />
                </div>
              ) : (
                  <div className={classes.MenuTitle} >
                    DESTINATIONS
                  <FaCaretDown
                      className={classes.Play}
                    />
                  </div>
                )}
            </DropdownToggle>
            <DropdownMenu
              style={{
                backgroundColor: "transparent",
                margin: ".5rem 0 0",
                border: "none",
                width: "500px",
              }}
            >
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.88)",
                }}
              >
			  <a href="/cities">
                <div
                  className={classes.DestinationsMenuItem}
                >
                  <p className={classes.DestinationsText}>Cities</p>
                </div>
				</a>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.75)",
                }}
              >
			   <a href="/attractions">
                <div
                  className={classes.DestinationsMenuItem}
                  
                >
                  <p className={classes.DestinationsText}>Attractions</p>
                </div>
				</a>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,.67)",
                }}
              >
			  <a href="/hotels">
                <div
                  className={classes.DestinationsMenuItem}
                >
                  <p className={classes.DestinationsText}>Hotels</p>
                </div>
				</a>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,.67)",
                }}
              >
			  <a href="/restaurants">
                <div
                  className={classes.DestinationsMenuItem}
                >
                  <p className={classes.DestinationsText}>Restaurants</p>
                </div>
				</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown inNavbar isOpen={isTopicsOpen} toggle={topicsToggle}>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "1rem" }}
            >
              {isTopicsOpen ? (
                <div className={classes.MenuTitleOpen}>
                  TOPICS
                  <FaCaretUp
                    className={classes.Play}
                  />
                </div>
              ) : (
                  <div className={classes.MenuTitle} >
                    TOPICS
                  <FaCaretDown
                      className={classes.Play}
                    />
                  </div>

                )}
            </DropdownToggle>
            <DropdownMenu
              className={classes.Center}
              style={{
                backgroundColor: "transparent",
                margin: ".5rem 0 0",
                border: "none",
                width: '350px'
              }}
            >
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.88)",
                }}
              >
                <a href="/environment">
                  <div
                    className={classes.TopicMenuItem}
                  >
                    <img className={classes.imgEnvironmental} src={Environmental} alt="environmental"/>
                  </div>
                </a>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.75)",
                }}
              >
                <a href="/social">
                  <div
                    className={classes.TopicMenuItem}
                  >
                    <img className={classes.imgSocial} src={Social} alt="social"/>
                  </div>
                </a>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.67)",
                }}
              >
                <a href="/cultural">
                  <div
                    className={classes.TopicMenuItem}
                  >
                    <img className={classes.imgCultural} src={Cultural} alt="cultural"/>
                  </div>
                </a>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>
          <NavbarText>
            <a
              target="_blank"
              href="https://oneplanetrating.org/"
              rel="noopener noreferrer"
              className={classes.Navbartext}
            >
              one planet rating
            </a>
          </NavbarText>
        </Nav>
        <Navbar>
          <SearchBox />
          <SocialIcons color={"#024345"}/>
        </Navbar>
      </Navbar>
      <div>
        <div className={classes.Drop}>
          {/* <Drop /> */}
          <img
            className={classes.Headerdrop}
            src={require("../../assets/images/header_shape.png")}
            alt="header_shape"
          ></img>
          <img
            className={classes.Logo}
            src={require("../../assets/images/logo_transparent.png")}
            alt="logo"
            onClick={goToHome}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
