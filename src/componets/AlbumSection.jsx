import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import SingleAlbum from "./SingleAlbum";
import { useEffect, useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AlbumSection = ({ title, album }) => {
   const [trackList, setTrackList] = useState(null);
   const [liked, setLiked] = useState([]);

   const btnLike = () => {
      setLiked(!liked);
   };
   //  console.log("liked? ", like);

   useEffect(() => {
      if (album) {
         fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
               album
         )
            .then((response) => {
               if (!response.ok) {
                  throw new Error("Fetch went bad!");
               }
               return response.json();
            })
            .then((data) => {
               console.log("data receaved!", data.data);
               setTrackList(data.data);
            })
            .catch((err) => console.log("ERROR ", err));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Container className="mb-5">
         <Row>
            <h1 className="text-white mb-4 mt-1">{title}</h1>

            {trackList &&
               trackList
                  .filter((track, index) => index < 4)
                  .map((track) => {
                     return (
                        <Col key={track.id} xs={6} md={3} className="">
                           <Image src={track.album.cover_medium} fluid />
                           <div className="d-flex flex-column text-center text-white">
                              <p className="fw-blod my-0">
                                 Track: {track.album.title}
                              </p>
                              <p className="fw-blod my-0">
                                 Artist: {track.artist.name}
                              </p>
                              <HeartFill onClick={btnLike} />
                           </div>
                        </Col>
                     );
                  })}
            {/* <SingleAlbum data={trackList} />
            <SingleAlbum data={trackList} />
            <SingleAlbum data={trackList} />
            <SingleAlbum data={trackList} /> */}
         </Row>
      </Container>
   );
};

export default AlbumSection;
