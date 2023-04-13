import React from "react";
import styled from "styled-components";
import BellIconImage from "../images/Assets/bxs_bell.svg";
import IconImage from "../images/Assets/Rectangle 20695.jpg";
import { NavLink ,Outlet} from "react-router-dom";

export default function Header() {
  return (
    <>
    <Headers>
      <Nav>
        <NavItem
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Overview
        </NavItem>
        <NavItem to="/guestlist">Guestlist</NavItem>
        <NavItem to="/temperorytraffic">Temperory traffic </NavItem>
      </Nav>
      <NotifiactionContainer>
        <BellIcon src={BellIconImage} />
        <ProfileIcon src={IconImage} />
      </NotifiactionContainer>
    </Headers>
    
    </>
  );
}

const Headers = styled.div`
  width: 80%;
  padding: 60px 0px 0px;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.ul`
  padding:0px 40px;
  display: flex;
  width: 35%;
  justify-content: space-between;
`;
const NavItem = styled(NavLink)`
  /* margin-right: 55px; */
  font-size: 23px;
  list-style: none;
  text-decoration: none;
  &.active{
    color:#333988;


  }
  
`;
const NotifiactionContainer = styled.div`
  width: 7%;
  
`;

const BellIcon = styled.img`
  margin-right:20px; 
`;
const ProfileIcon = styled.img`
  width: 30px;
  display: inline-block;
  border-radius: 50%;
`;
