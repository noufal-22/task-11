import React from "react";
import Logo1 from "../images/Assets/Logo.svg";
import DashbordImage from "../images/Assets/akar-icons_dashboard.svg";
import CateringstasuImage from "../images/Assets/fluent_food-cake-20-regular.svg";
import GuestTrafficImage from "../images/Assets/bx_bar-chart-square.svg";
import GiftsImage from "../images/Assets/ant-design_gift-outlined.svg";
import AccontImg from "../images/Assets/healthicons_ui-user-profile-outline.svg";
import WalletImg from "../images/Assets/clarity_wallet-line.svg";
import HelpImg from "../images/Assets/ant-design_gift-outlined.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={Logo1} />
      </LogoContainer>

      <MainContainer>
     
          <NavHeading>MAIN MENU</NavHeading>
          <NavList>
            <NavItem className={({isActive})=>(isActive ? "active" : "" )}  to="/">
              <NavImage src={DashbordImage} />

              <NavContent>Dashbord</NavContent>
            </NavItem>
            <NavItem to="/cateringStatus">
              <NavImage src={CateringstasuImage} />

              <NavContent>CateringStatus</NavContent>
            </NavItem>
            <NavItem to="/guesttraffic">
              <NavImage src={GuestTrafficImage} />

              <NavContent>Guest traffic</NavContent>
            </NavItem>
            <NavItem to="/gifts">
              <NavImage src={GiftsImage} />

              <NavContent>Gifts</NavContent>
            </NavItem>
          </NavList>
      </MainContainer>
      <BottomContainer>
        <BottomHeading>SETTINGS</BottomHeading>
        <BottomItems>
          <Item  className={({isActive})=>(isActive ? "active" : "" )} to="/account">
            <ItemImg src={AccontImg} />
            <ItemContent>Account</ItemContent>
          </Item>
          <Item to="/wallet">
            <ItemImg src={WalletImg} />
            <ItemContent>Wallet</ItemContent>
          </Item>
          <Item to="/helpsupport">
            <ItemImg src={HelpImg} />
            <ItemContent>Help & Support</ItemContent>
          </Item>
        </BottomItems>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 18%;
  
  padding: 50px ;
  height: 89vh;
`;
const LogoContainer = styled.h1`
  width: 200px;
  padding-bottom: 70px;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const MainContainer = styled.div`
 margin-bottom:30px`;
const NavHeading = styled.h3`
  font-size: 18px;
  color: #808080;
  font-weight: 500;
  font-family: system-ui;
`;
const NavList = styled.ul`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  text-decoration: none;
  list-style: none;
  color: black;
  &.active{
    color:#333988;


  }
`;
const NavContent = styled.h4`
  font-size: 18px;
  margin-left: 15px;
  font-weight: 400;
  font-family: sans-serif;

`;
const NavImage = styled.img``;

const BottomContainer = styled.div``;
const BottomHeading = styled.h3`
  font-size: 18px;
  color: #808080;
  font-weight: 500;
  font-family: system-ui;

`;
const BottomItems = styled.ul`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;
const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: black;
  &.active{
    color:#333988;


  }
`;
const ItemImg = styled.img``;
const ItemContent = styled.h4`
 font-size: 18px;
  margin-left: 15px;
  font-weight: 400;
  font-family: sans-serif;

`;
