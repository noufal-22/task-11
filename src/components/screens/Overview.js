import React from "react";
import styled from "styled-components";
import Graph from "./Graph";
import Guest from "./Guest";
function OverView() {
  return (
    <>
    
      <Container>
        <OverviewtopContainer>
          <ContainerBox>
            <ContainerIn>
              <Containertop>
                <Img
                  src={require("../images/Assets/white icon.svg").default}
                  alt="logo"
                />
                <Tophead>Male Guest</Tophead>
              </Containertop>
              <ContainerBottom>
                <Total>
                  <TotalInvites>Total invites</TotalInvites>
                  <Totalcount>8,124</Totalcount>
                </Total>
                <Bar>|</Bar>
                <Total>
                  <TotalCome>Total Come</TotalCome>
                  <Totalcount>4,204</Totalcount>
                </Total>
              </ContainerBottom>
            </ContainerIn>
          </ContainerBox>
          <ContainerBox1>
            <ContainerIn1>
              <Containertop>
                <Img
                  src={require("../images/Assets/white icon2.svg").default}
                  alt="logo"
                />
                <Tophead>Female Guest</Tophead>
              </Containertop>
              <ContainerBottom>
                <Total>
                  <TotalInvites>Total invites</TotalInvites>
                  <Totalcount>9,620</Totalcount>
                </Total>
                <Bar>|</Bar>
                <Total>
                  <TotalCome>Total Come</TotalCome>
                  <Totalcount>6,125</Totalcount>
                </Total>
              </ContainerBottom>
            </ContainerIn1>
          </ContainerBox1>
          <ContainerGraph>
            <Traffic>Visitor traffic</Traffic>
            <GraphImg
              src={require("../images/Assets/Group 3465418.svg").default}
              alt="logo"
            />
          </ContainerGraph>
        </OverviewtopContainer>
      </Container>
      <Containertt>
       
         <Guest/>
     
       
         <Graph/>
   
      </Containertt>
    </>
  );
}
const OverviewtopContainer = styled.div`
  display: flex;
`;
const Containertt = styled.div`
  background-color: #f9f8f8;
  /* margin-top: -10px; */
  /* height: 80vh; */
  /* height: 60vh; */
  /* width: 100%; */
  display: flex;
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;


const Container = styled.div`
  background-color: #f9f8f8;
  width: 100%;
  display: flex;
  @media all and (max-width: 769px) {
    ${"" /* height: 90vh; */}
  }
`;
const Bar = styled.span`
  font-size: 33px;
  margin-right: 20px;
`;
const ContainerIn = styled.div`
  margin: 20px 50px 0px 50px;
`;
const ContainerIn1 = styled.div`
  margin: 20px 50px 0px 50px;
`;
const ContainerGraph = styled.div`
  width: 270px;
  height: 170px;
  border-radius: 20px;
  margin: 20px;
  background-color: #fff;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Traffic = styled.h3`
  margin-left: 80px;
  font-size: 15px;
  margin-bottom: 20px;
`;
const GraphImg = styled.img`
  width: 55%;
  margin: 70px;
  margin-top: -60px;
`;
const ContainerBox = styled.div`
  margin: 20px;
  width: 330px;
  height: 170px;
  background-color: #a5e3e3;
  border-radius: 20px;
`;
const ContainerBox1 = styled.div`
  margin: 20px;
  width: 330px;
  height: 170px;
  border-radius: 20px;
  background-color: #d2a2f7;
`;
const Containertop = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px 5px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 10px;
`;
const Tophead = styled.h2`
  font-size: 17px;
`;
const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Total = styled.div`
  margin-right: 20px;
`;
const TotalInvites = styled.span`
  font-size: 10px;
`;
const Totalcount = styled.h2`
  font-size: 37px;
  margin-top: -1px;
`;
const TotalCome = styled.span`
  font-size: 10px;
`;
const OverviewbottomContainer = styled.div`
  flex-wrap: wrap;
  width: 330px;
  height: 170px;
  border-radius: 20px;
  margin: 20px;
`;
const ProfileContainer = styled.div``;
const BottomHeader = styled.div`
  width: 140%;
  display: flex;
  margin-top: -30px;
  margin-bottom: -20px;
`;
const Recent = styled.h3``;
const Seemore = styled.span`
  margin-top: 20px;
  margin-left: 130px;
`;
const ProfileEdit = styled.div`
  background-color: grey;
  height: 70px;
  border-radius: 20px;
  margin-top: 20px;
  position: relative;
`;
const Editdiv = styled.div`
  padding-top: 20px;
  padding-left: 240px;
`;
const Profiletop = styled.div`
  background-color: #fff;
  width: 100%;
  height: 70px;
  border-radius: 20px;
  display: flex;
  position: absolute;
`;
const EditImg = styled.img`
  margin-left: 10px;
`;
const Profile = styled.div``;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  margin-right: 30px;
`;
const ProfileName = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: -0.5px;
`;
const Time = styled.span`
  color: grey;
  font-size: 13px;
`;
const DotImg = styled.img`
  width: 50px;
  height: 25px;
  margin-left: 50px;
  margin-top: 10px;
`;
export default OverView;