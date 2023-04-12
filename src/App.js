import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import Nav from "./components/Includes/Nav";
import styled from "styled-components";
import Guestlist from "./components/screens/Guestlist";
import CateringStatus from "./components/screens/CateringStatus";
import Gifts from "./components/screens/Gifts";
import Account from "./components/screens/Account";
import Wallet from "./components/screens/Wallet";
import HelpSupport from "./components/screens/HelpSupport";
import Overview from "./components/screens/Overview";
import Temperorytraffic from "./Temperorytraffic";
import ComingSoon from "./components/screens/ComingSoon";

function App() {
  return (
    <>
      <MainContainer>
        
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<Overview/>} />
              <Route path="guestlist" element={<Guestlist/>}/>
              <Route path="temperorytraffic" element={<Temperorytraffic/>} /> 

               {/* <Route path="*" element={<ComingSoon/>}/>  */}
            </Route>
           <Route path="cateringstatus" element={<CateringStatus/>}/>
           <Route path="guesttraffic" element={<Guestlist/>} />
           <Route path="gifts" element={<Gifts/>} />
           <Route path="account" element={<Account/>} />
           <Route path="wallet" element={<Wallet/>}/>
           <Route path="helpsupport" element={<HelpSupport/>}/>
           {/* <Route path="*" element={<ComingSoon/>}/> */}
          </Routes>
        </Router>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  display: flex; 

  

`;
export default App;
