import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleAlbum from "./SingleAlbum";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AlbumSection = ({ title, album }) => {
   const [trackList, setTrackList] = useState(null);
   const searchedTitleFromReduxStore = useSelector(
      (state) => state.searchedTitle.searchedTitle
   );

   const searchedFromReduxStore = useSelector(
      (state) => state.searchedResult.content
   );

   useEffect(() => {
      // let isMounted = true;
      if (album && album !== "searched") {
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
               //  console.log("data receaved!", data.data);
               setTrackList(data.data);
               //  if (isMounted)
            })
            .catch((err) => console.log("ERROR ", err));
      } else {
         //  setTrackList(searchedFromReduxStore);
      }

      // return () => {
      //    isMounted = false;
      // };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [album]);

   console.log("track list", trackList, title);
   //  console.log("this is album global", { album });

   return (
      <Container className="mb-5">
         <Row>
            <h1 className="text-white mb-4 mt-1">{title}</h1>

            {trackList && title !== "Searched Results"
               ? trackList
                    .filter((track, index) => index < 4)
                    .map((track, index) => {
                       return <SingleAlbum key={track.id} track={track} />;
                    })
               : trackList &&
                 trackList.map((track, index) => {
                    return (
                       <SingleAlbum
                          key={track.id}
                          track={track}
                          index={index}
                       />
                    );
                 })}
         </Row>
      </Container>
   );
};

export default AlbumSection;
