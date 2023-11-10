import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "./TopBar";
import AlbumSection from "./AlbumSection";
import { useSelector } from "react-redux";

function Body() {
   const searchedFromReduxStore = useSelector((state) => state.searched.search);
   const searchedTitleFromReduxStore = useSelector(
      (state) => state.searchedTitle.searchedTitle
   );
   console.log(
      "redux searched: ",
      searchedFromReduxStore,
      searchedTitleFromReduxStore
   );
   return (
      <Col md={12}>
         <Container>
            <Row>
               <Col className="col-lg-10 offset-lg-2 h-100 primary mb-5 pb-3">
                  <TopBar />
                  {searchedTitleFromReduxStore && (
                     <AlbumSection
                        title="Searched Results"
                        album={searchedTitleFromReduxStore}
                     />
                  )}
                  <AlbumSection title="Rock Classics" album="Rock Classics" />
                  <AlbumSection title="Pop Culture" album="Pop Culture" />
                  <AlbumSection title="#HopPop" album="HipPop" />
               </Col>
            </Row>
         </Container>
      </Col>
   );
}

export default Body;
