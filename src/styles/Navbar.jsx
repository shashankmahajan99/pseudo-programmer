import styled from "styled-components";
import {
  backgroundColor,
  borderColor,
  buttonBackgroundColor,
  buttonTextColor,
  inputTextColor,
  subHeadingColor,
  textColor,
} from "./theme";

export const ThemedImg = styled.img`
  width: 30px;
  border-radius: 100%;
  height: auto;
  aspect-ratio: 1;
`;
export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    p {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
`;
export const ThemedProfilePic = styled(ThemedImg)`
  @media (max-width: 768px) {
    width: 40px;
    border-radius: 100%;
    height: auto;
    aspect-ratio: 1;
  }
`;
export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: ${backgroundColor};
  color: ${textColor};
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  .searchbar {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 0 20px;
    max-width: 700px;
    margin: 0 auto;
    input {
      flex-grow: 1;
      height: 35px;
      padding: 5px 10px;
      border: none;
      border-radius: 20px;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .searchicon {
      margin-right: 10px;
    }

    button {
      margin-left: 10px;
      padding: 5px 10px;
      background-color: ${buttonBackgroundColor};
      color: ${buttonTextColor};
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .mode {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
  }

  .user {
    display: flex;
    align-items: center;

    p {
      margin: 0 10px;
    }

    .login,
    .logout {
      display: flex;
      align-items: center;
      margin-left: 10px;
      cursor: pointer;
    }

    .login p,
    .logout p {
      margin: 0 5px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    .searchbar {
      display: none;
    }

    .mode {
      display: none;
    }

    .user {
      display: none;
    }
  }
`;
export const StyledHamburger = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 200;

  &::before,
  &::after,
  div {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${inputTextColor};
    transition: all 0.3s ease;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(6px);
  }

  &.open::before {
    transform: translateY(0) rotate(45deg);
  }

  &.open::after {
    transform: translateY(0) rotate(-45deg);
  }

  &.open div {
    transform: scale(0);
  }
`;
export const Wrapper = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 80px;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: ${backgroundColor};
  z-index: 100;
  padding: 10px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    right: 100%;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: opacity 0.3s ease;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
  @media (max-width: 768px) {
    .user {
      display: block;
    }
  }
`;
export const StyledUserMenu = styled.div`
  display: flex;
`;
export const StyledUserMenuToggle = styled.div`
  width: 100%;
  padding: 10px;
  overflow: hidden;
  height: ${({ open }) => (open ? "auto" : "65px")};
  border: 1px solid ${borderColor};
  transition: height 0.5s ease-in-out;
  .user-info {
    display: flex;
  }
  .user-info:after {
    margin-left: auto;
    margin-right: 0;
    content: ${({ open }) => (open ? '"-"' : '"+"')};
  }

  .user-manage {
    margin-left: 10px;
    h3 {
      font-size: 15px;
      font-weight: lighter;
      color: ${subHeadingColor};
    }
  }
`;
export const StyledUserMenuItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColor};
  color: ${textColor};
`;
