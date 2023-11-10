import { useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SingleAlbum = ({ artist, track }) => {
   const [like, setLike] = useState(false);
   const btnLike = () => {
      setLike(!like);
   };
   console.log("liked? ", like);

   return (
      <Col xs={6} md={3} className="">
         <Image src="https://placekitten.com/300" fluid />
         <div className="d-flex flex-column text-center text-white">
            <p className="fw-blod my-0">Track: "name"</p>
            <p className="fw-blod my-0">Artist: "name"</p>
            <HeartFill onClick={btnLike} />
         </div>
      </Col>
   );
};

export default SingleAlbum;
