import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleAlbum from "./SingleAlbum";
import { useEffect, useState } from "react";

const AlbumSection = ({ title, album }) => {
   const [trackList, setTrackList] = useState(null);

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
   }, [album]);

   return (
      <Container className="mb-5">
         <Row>
            <h1 className="text-white mb-4 mt-1">{title}</h1>

            {trackList && title !== "Searched Results"
               ? trackList
                    .filter((track, index) => index < 4)
                    .map((track) => {
                       return <SingleAlbum key={track.id} track={track} />;
                    })
               : trackList &&
                 trackList.map((track) => {
                    return <SingleAlbum key={track.id} track={track} />;
                 })}
         </Row>
      </Container>
   );
};

export default AlbumSection;
