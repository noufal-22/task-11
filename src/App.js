import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import Nav from "./components/Includes/Nav";
import styled from "styled-components";
import TemperoryTraffic from "./components/screens/TemperoryTraffic";
import CominSoon from "./components/screens/CominSoon";
import Guestlist from "./components/screens/Guestlist";
function App() {
  return (
    <>
      <MainContainer>
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/overview" element={<OverView />} />
              </Route>
            <Route path="*" element={<CominSoon />} />
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
