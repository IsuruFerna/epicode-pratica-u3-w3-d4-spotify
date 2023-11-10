import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Body from "./componets/Body";
import SideBar from "./componets/SideBar";
import Player from "./componets/Player";

function App() {
   return (
      <div className="App">
         <Container fluid>
            <Row>
               <SideBar />
               <Body />
               <Player />
            </Row>
         </Container>
      </div>
   );
}

export default App;
