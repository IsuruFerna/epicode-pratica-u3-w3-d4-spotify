import { useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import {
   addToSelectedTrack,
   addToLike,
   removeFromLikes,
} from "../redux/actions";

const SingleAlbum = ({ track, index }) => {
   //  const [selectedTrack, setSelectedTrack] = useState(null);
   const dispatch = useDispatch();
   const [liked, setLiked] = useState(false);
   //  const trackFromReduxStore = useSelector((state) => state.track.track);
   // const likedTrackFromReduxStore = useSelector(
   //    (state) => state.liked.likedTracks
   // );

   //  console.log("liked ", likedTrackFromReduxStore);

   //  const selectTrack = ()
   //  console.log("liked? ", liked);

   return (
      <Col xs={6} md={3} className="">
         <Image
            onClick={() => {
               console.log("this is selected track: ", track);
               dispatch(addToSelectedTrack(track));
            }}
            src={track.album.cover_medium}
            fluid
         />
         <div className="d-flex flex-column align-items-center text-center text-white">
            <p className="fw-blod my-0">Track: {track.title}</p>
            <p className="fw-blod my-0">Artist: {track.artist.name}</p>
            <HeartFill
               className={`mt-2 mb-3 ${liked ? "liked" : ""}`}
               onClick={() => {
                  // if it not liked like and add to liked list else dislike and remove form the liked list
                  if (!liked) {
                     dispatch(addToLike(track));
                  } else {
                     dispatch(removeFromLikes(index));
                  }
                  setLiked(!liked);
               }}
            />
         </div>
      </Col>
   );
};

export default SingleAlbum;
