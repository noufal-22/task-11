import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <>
        <Wrapper>
          <nav>
            <HeadNav>
              <HeadList>
                <DataLink to="overview">Overview</DataLink>
                <DataLink to="guest-list">Guestlist</DataLink>
                <DataLink to="temperory-traffic">Temperory traffic</DataLink>
              </HeadList>
              <Settings>
                <NavImg
                  src={require("../images/Assets/bxs_bell.svg").default}
                  alt="logo"
                />
                <NavImage
                  src={require("../../Assets/Rectangle 20695.jpg")}
                  alt="logo"
                />
              </Settings>
            </HeadNav>
          </nav>
        </Wrapper>
      </>
    )
  }
  
  const Wrapper = styled.div`
    width: 70rem;
  `;
  const HeadNav = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
      margin-left: 70px;
    }
  `;
  const HeadList = styled.li``;
  const Settings = styled.div`
    @media all and (max-width: 480px) {
      width: 20%;
    }
  `;
  const NavImg = styled.img`
    margin-right: 10px;
    width: 30px;
  `;
  const NavImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  `;
  const DataLink = styled(Link)`
    text-decoration: none;
    color: #000;
    margin-right: 20px;
    font-weight: 600;
    &:hover {
      border-bottom: 2px solid #000;
    }
  `;



