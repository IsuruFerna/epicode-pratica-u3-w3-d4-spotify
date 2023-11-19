import { HeartFill, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LikeHederComp = () => {
   return (
      <div className="d-flex align-items-end p-3 pb-0">
         <div className="liked-bg rounded">
            <HeartFill className="text-white liked-heart-big" />
         </div>
         <div className="ms-3 text-white">
            <p className="mb-2">Playlist</p>
            <h1 className="fw-bold">Liked Songs</h1>
            <div>
               <p className="text-white mb-1">
                  <PersonCircle className="text-secondary me-2 mb-1 fs-4" />
                  <Link to="/" className="text-white">
                     Isuru Fernando
                  </Link>{" "}
                  &#8226; 111
               </p>
            </div>
         </div>
      </div>
   );
};

export default LikeHederComp;
