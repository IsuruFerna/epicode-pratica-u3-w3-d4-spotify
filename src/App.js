// stylesheets
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/componets/SideBar.css";

// libruaries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// componets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SideBar from "./componets/SideBar";
import Player from "./componets/Player";

// pages
import LikedPage from "./pages/LikedPage";
import HomePage from "./pages/HomePage";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            {/* <HomePage /> */}
            <Container fluid>
               <Row>
                  <SideBar />
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="liked" element={<LikedPage />} />
                  </Routes>
                  {/* <Body /> */}
                  <Player />
               </Row>
            </Container>
         </BrowserRouter>
      </div>
   );
}

export default App;
