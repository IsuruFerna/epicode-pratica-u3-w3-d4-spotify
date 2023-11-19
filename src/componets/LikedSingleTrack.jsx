import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { HeartFill } from "react-bootstrap-icons";

const LikedSingleTrack = ({ track, num }) => {
   return (
      <Container fluid className="text-secondary">
         <Row className="liked-play-list-track py-1">
            <Col xs={4} className="d-flex align-items-center">
               <div>
                  <p className="m-0 text-center me-3">{num + 1}</p>
               </div>
               <Image
                  className="p-1"
                  src={track.album.cover_small}
                  alt="cover-picture"
               />
               <div className="ms-3">
                  <p className="m-0 lh-1">{track.title}</p>
                  <p className="m-0 lh-1 text-secondary">{track.artist.name}</p>
               </div>
            </Col>
            <Col xs={3}>
               <p className="mt-3 mb-2">{track.album.title}</p>
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
