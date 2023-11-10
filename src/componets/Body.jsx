import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "./TopBar";
import AlbumSection from "./AlbumSection";

function Body() {
   return (
      <Col md={12}>
         <Container>
            <Row>
               <Col className="col-lg-10 offset-lg-2 h-100 primary mb-5 pb-3">
                  <TopBar />
                  <AlbumSection title="Rock Classics" album="Rock Classics" />
                  <AlbumSection title="Pop Culture" album="Pop Culture" />
                  <AlbumSection title="#HopPop" album="HipPop" />
               </Col>
            </Row>
         </Container>
      </Col>
   );
}

export default Body;
