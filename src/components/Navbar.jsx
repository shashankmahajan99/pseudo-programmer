import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../axios";

import { useTheme } from "../styles/ThemeContext";
import { withTheme } from "styled-components";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import logo from "../assets/logo.png";
import {
  StyledHamburger,
  StyledLogo,
  StyledNavbar,
  ThemedImg,
  ThemedProfilePic,
  Wrapper,
  StyledUserMenu,
  StyledUserMenuItems,
  StyledUserMenuToggle,
} from "../styles/Navbar";
function Navbar({ searchedTerm, setSearchedTerm, ...props }) {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [user, setUser] = useState({ name: "hello" });
  const themeToggle = useTheme();
  const [open, setOpen] = useState(false);
  const [userMenuToggle, setUserMenuToggle] = useState(false);
  return (
    <>
      <StyledHamburger
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <div />
      </StyledHamburger>
      <Wrapper open={open}>
        <div className="searchbar">
          <FaSearch className="searchicon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
          <button
            onClick={() => {
              axiosInstance
                .get(`http://localhost:8080/api/search/${searchedTerm}`)
                .then((res) => {})
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Search
          </button>
        </div>
        <div className="mode">
          <ThemedImg
            onClick={() => themeToggle.toggle()}
            src={props.theme.mode === "dark" ? sun : moon}
          />
        </div>
        <div>
          {user && user.name && (
            <StyledUserMenu>
              <StyledUserMenuToggle
                open={userMenuToggle}
                onClick={() => setUserMenuToggle(!userMenuToggle)}
              >
                <div className="user-info">
                  <ThemedProfilePic
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="user profile picture"
                  />
                  <div className="user-manage">
                    <h3>Manage</h3>
                    <p>{user && user.name ? user.name : ""}</p>
                  </div>
                </div>
                <StyledUserMenuItems>
                  <p>Profile</p>
                  {(login || signup) && (
                    <div className="logout">
                      <p>Logout</p>
                    </div>
                  )}
                </StyledUserMenuItems>
              </StyledUserMenuToggle>
            </StyledUserMenu>
          )}
          {!login && !signup && (
            <div className="login">
              <p>Login</p>
              <p>Signup</p>
            </div>
          )}
        </div>
      </Wrapper>
      <StyledNavbar>
        <StyledLogo className="logo">
          <ThemedImg src={logo} alt="logo" />
          <p>Pseudo Programmer</p>
        </StyledLogo>
        <div className="searchbar">
          <FaSearch className="searchicon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
          <button
            onClick={() => {
              axiosInstance
                .get(`http://localhost:8080/api/search/${searchedTerm}`)
                .then((res) => {})
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Search
          </button>
        </div>
        <div className="mode">
          <ThemedImg
            onClick={() => themeToggle.toggle()}
            src={props.theme.mode === "dark" ? sun : moon}
          />
        </div>
        <div className="user">
          {user && user.name ? (
            <ThemedProfilePic
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user profile picture"
            />
          ) : (
            <p></p>
          )}
          {!login && !signup && (
            <div className="login">
              <p>Login</p>
              <p>Signup</p>
            </div>
          )}
          {(login || signup) && (
            <div className="logout">
              <p>Logout</p>
            </div>
          )}
        </div>
      </StyledNavbar>
    </>
  );
}

export default withTheme(Navbar);
