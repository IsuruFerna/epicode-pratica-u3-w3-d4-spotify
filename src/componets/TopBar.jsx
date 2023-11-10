import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TopBar = () => {
   return (
      <Container className="d-none d-lg-block p-0 text-secondary" fluid>
         <Row>
            <Col className="d-flex flex-row w-100 justify-content-center align-items-center">
               <h4 href="#" className="mx-3 mt-3 mainLinks">
                  TRNDING
               </h4>
               <h4 href="#" className="mx-3 mt-3 mainLinks">
                  PODCAST
               </h4>
               <h4 href="#" className="mx-3 mt-3 mainLinks">
                  MOODS AND GENRES
               </h4>
               <h4 href="#" className="mx-3 mt-3 mainLinks">
                  NEW RELEASES
               </h4>
               <h4 href="#" className="mx-3 mt-3 mainLinks">
                  DISCOVER
               </h4>
            </Col>
         </Row>
      </Container>
   );
};

export default TopBar;
