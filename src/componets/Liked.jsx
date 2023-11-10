import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function Liked() {
   const likedTrackFromReduxStore = useSelector(
      (state) => state.liked.likedTracks
   );

   console.log("liked tracks", likedTrackFromReduxStore);
   return (
      <>
         <h5 className="p-4 pb-0 mb-0 text-secondary">Liked</h5>
         <ListGroup className="text-white p-3">
            {likedTrackFromReduxStore &&
               likedTrackFromReduxStore.map((track) => {
                  return (
                     <ListGroup.Item key={track.id}>
                        {track.title}
                     </ListGroup.Item>
                  );
               })}
         </ListGroup>
      </>
   );
}

export default Liked;
