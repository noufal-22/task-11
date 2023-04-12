import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Headers>
      <Nav>
        <NavItem className={({isActive})=>(isActive ? "active" :"")} to="/">Overview</NavItem>
        <NavItem to ="/guestlist">Guestlist</NavItem>
        <NavItem to="/temperorytraffic" >Temperory traffic </NavItem>
      </Nav>
      <NotifiactionContainer>
        <BellIcon />
        <ProfileIcon />
      </NotifiactionContainer>
    </Headers>
  );
}

const Headers= styled.div`
  padding: 70px 0;
  font-size: 25px;
  font-weight: 300;



`
const Nav = styled.ul``
const NavItem = styled(NavLink)``
const NotifiactionContainer = styled.div``
const BellIcon = styled.img``
const ProfileIcon = styled.img``

