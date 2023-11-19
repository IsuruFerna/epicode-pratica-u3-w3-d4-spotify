import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import AlbumSection from "../componets/AlbumSection";
import TopBar from "../componets/TopBar";

function HomePage() {
   const searchedFromReduxStore = useSelector(
      (state) => state.searchedResult.content
   );
   const searchedTitleFromReduxStore = useSelector(
      (state) => state.searchedTitle.searchedTitle
   );
   // console.log(
   //    "redux searched: ",
   //    searchedFromReduxStore,
   //    searchedTitleFromReduxStore
   // );
   return (
      <Col md={12}>
         <Container>
            <Row>
               <Col className="col-lg-10 offset-lg-2 h-100 primary mb-5 pb-3">
                  <TopBar />
                  {typeof searchedFromReduxStore !== "undefined" &&
                     searchedFromReduxStore && (
                        <AlbumSection
                           title="Searched Results"
                           album="searched"
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

export default HomePage;
