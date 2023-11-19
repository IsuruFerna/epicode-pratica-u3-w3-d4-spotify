import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Clock, ListTask, PlayCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import LikeHederComp from "../componets/LikeHeaderComp";
import LikedSingleTrack from "../componets/LikedSingleTrack";
import { useSelector } from "react-redux";

const LikedPage = () => {
   const likedSongsReduxStore = useSelector((state) => state.liked.content);

   console.log("liked page", likedSongsReduxStore);

   return (
      <Col md={12}>
         <Container fluid>
            <Row>
               <Col className="col-lg-10 offset-lg-2 h-100 primary mb-5 pb-3 px-0">
                  <div className="position-relative">
                     {/* this is bg */}
                     <div className="vh-100">
                        <div className="h-75 like-title-header-bg"></div>
                        <div className="h-25 liked-list-bg"></div>
                     </div>

                     {/* this is comp */}
                     <div className="position-absolute top-0 w-100">
                        <LikeHederComp />
                     </div>
                     <div className="position-absolute top-7em w-100">
                        <div className="d-flex align-items-center justify-content-between mt-3 liked-play-list-header p-3">
                           <PlayCircleFill className="btn-play" />
                           {/* <PauseCircleFill /> */}
                           <Link
                              to="liked"
                              className="link-underline link-underline-opacity-0"
                           >
                              <p className="text-secondary m-0">
                                 List <ListTask className="text-secondary" />
                              </p>
                           </Link>
                        </div>

                        <Container fluid className="text-secondary">
                           <Row className="liked-play-list-title align-items-center border-bottom border-opacity-25 mb-2 pb-2">
                              <Col xs={4}>
                                 <p className="my-1">
                                    <span className="me-3">#</span>Title
                                 </p>
                              </Col>
                              <Col xs={3}>
                                 <p className="my-1">Album</p>
                              </Col>
                              <Col xs={3}>
                                 <p className="my-1">Date added</p>
                              </Col>
                              <Col xs={2}>
                                 <p className="my-1 ms-5">
                                    <Clock />
                                 </p>
                              </Col>
                           </Row>
                        </Container>
                        <div className="liked-list-bg-back ">
                           {likedSongsReduxStore.length > 0 &&
                              likedSongsReduxStore.map((track, i) => {
                                 // console.log("this is each track: ", track);
                                 return (
                                    <LikedSingleTrack
                                       key={track.id}
                                       num={i}
                                       track={track}
                                    />
                                 );
                              })}
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </Col>
   );
};

export default LikedPage;
