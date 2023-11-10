import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

const Player = () => {
   return (
      <Container className="fixed-buttom bg-container player" fluid>
         <Row>
            {/* <Col md={2} className="d-none d-lg-block ">
               this is player
            </Col> */}
            <Col className="col-lg-10 offset-lg-2">
               <div className="row h-100 flex-column justify-content-center align-items-center">
                  <div>
                     <Image></Image>
                  </div>
                  <div className="col-6 col-md-4 playerControls">
                     <div className="d-flex">
                        <a href="#">
                           <img
                              src="accets/playerbuttons/shuffle.png"
                              alt="shuffle"
                           />
                        </a>
                        <a href="#">
                           <img
                              src="accets/playerbuttons/prev.png"
                              alt="prev"
                           />
                        </a>
                        <a href="#">
                           <img
                              src="accets/playerbuttons/play.png"
                              alt="play"
                           />
                        </a>
                        <a href="#">
                           <img
                              src="accets/playerbuttons/next.png"
                              alt="next"
                           />
                        </a>
                        <a href="#">
                           <img
                              src="accets/playerbuttons/repeat.png"
                              alt="repeat"
                           />
                        </a>
                     </div>
                     <div className="progress mt-3">
                        <div role="progressbar"></div>
                     </div>
                  </div>
               </div>
               {/* <Container>
                  <Row>
                     <div className="d-flex flex-column">
                        <div className="player-btns"></div>
                        <Link></Link>
                     </div>
                  </Row>
               </Container> */}
            </Col>
         </Row>
      </Container>
   );
};

export default Player;
