import { HeartFill } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Liked.css";

function Liked() {
   const likedTrackFromReduxStore = useSelector(
      (state) => state.liked.likedTracks
   );

   console.log("liked tracks", likedTrackFromReduxStore);
   return (
      <Link className="link-underline link-underline-opacity-0" to="/liked">
         <div className="d-flex m-2 align-items-center list-item-liked  mx-3">
            <div className="liked-bg p-3 rounded">
               <HeartFill className="text-white mx-1" />
            </div>
            <h5 className="ms-2 ps-1 mb-1 text-white">Liked</h5>
            {/* <ListGroup className="text-white p-3">
            {likedTrackFromReduxStore &&
               likedTrackFromReduxStore.map((track) => {
                  return (
                     <ListGroup.Item key={track.id}>
                        {track.title}
                     </ListGroup.Item>
                  );
               })}
         </ListGroup> */}
         </div>
      </Link>
   );
}

export default Liked;
