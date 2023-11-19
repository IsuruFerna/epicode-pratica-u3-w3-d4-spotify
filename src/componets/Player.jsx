import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

const Player = () => {
   const trackFromReduxStore = useSelector((state) => state.track.track);
   //  console.log("player side selected: ", trackFromReduxStore.length);

   return (
      <Container className="fixed-buttom bg-container player player-bg" fluid>
         <Row>
            {/* <Col md={2} className="d-none d-lg-block ">
               this is player
            </Col> */}
            <Col className="col-lg-10 offset-lg-2">
               <Container fluid>
                  <Row>
                     <Col xs={3} md={4}>
                        {trackFromReduxStore && (
                           <div className="d-flex m-3 align-items-center">
                              <Image
                                 className="me-2"
                                 src={trackFromReduxStore.album.cover_small}
                              />
                              <div className="text-white">
                                 <p className="mb-0">
                                    {trackFromReduxStore.title}
                                 </p>
                                 <p className="my-0">
                                    <small>
                                       {trackFromReduxStore.artist.name}
                                    </small>
                                 </p>
                              </div>
                           </div>
                        )}
                     </Col>
                     <Col xs={9} md={4}>
                        <div className="row h-100 flex-column justify-content-center align-items-center">
                           <div className="col-6 col-md-4 playerControls w-100">
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
                     </Col>
                     <Col md={4}></Col>
                  </Row>
               </Container>
               {/* <div className="d-flex w-100"></div> */}
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
