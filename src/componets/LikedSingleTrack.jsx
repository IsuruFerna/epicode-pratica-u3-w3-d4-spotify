import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { HeartFill } from "react-bootstrap-icons";

const LikedSingleTrack = () => {
   return (
      <Container fluid className="text-secondary">
         <Row className="liked-play-list-track">
            <Col xs={4} className="d-flex align-items-center">
               <div>
                  <p className="m-0 text-center me-3">1</p>
               </div>
               <Image src="https://placekitten.com/50" alt="cover-picture" />
               <div className="ms-3">
                  <p className="m-0 lh-1">Track name</p>
                  <p className="m-0 lh-1 text-secondary">artist</p>
               </div>
            </Col>
            <Col xs={3}>
               <p className="mt-3 mb-2">Album name</p>
            </Col>
            <Col xs={3}>
               <p className="mt-3 mb-2">26 Dec 2020</p>
            </Col>
            <Col xs={2}>
               <p className="mt-3 mb-2">
                  <HeartFill className="my-2 btn-play fs-6 me-4" />
                  3:09
               </p>
            </Col>
         </Row>
      </Container>
   );
};

export default LikedSingleTrack;
