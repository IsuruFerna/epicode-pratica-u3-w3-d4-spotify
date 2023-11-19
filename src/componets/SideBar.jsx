import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addToSearced,
   addTosearchedTitle,
   getSearchedResults,
} from "../redux/actions";
import Liked from "./Liked";
import { Link } from "react-router-dom";

// import "./SideBar.css";

function SideBar() {
   const [search, setSearch] = useState("");
   const [searchResult, setSearchResults] = useState(null);
   const dispatch = useDispatch();
   // const searchedFromReduxStore = useSelector((state) => state.searched.search);
   // const searchedTitleFromReduxStore = useSelector(
   //    (state) => state.searchedTitle.searchedTitle
   // );

   const handleChange = (e) => {
      setSearch(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setSearch(search.trim());
      dispatch(addToSearced(searchResult));
      dispatch(addTosearchedTitle(search));
      dispatch(getSearchedResults(search));
   };

   // console.log("redux search: ", searchedFromReduxStore);
   // console.log("redux searched title: ", searchedTitleFromReduxStore);

   // useEffect(() => {
   //    if (search) {
   //       fetch(
   //          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
   //             search
   //       )
   //          .then((response) => {
   //             if (!response.ok) {
   //                throw new Error("Fetch went bad!");
   //             }
   //             return response.json();
   //          })
   //          .then((data) => {
   //             console.log("data receaved!", data);
   //             setSearchResults(data.data);
   //          })
   //          .catch((err) => console.log("ERROR ", err));
   //    }
   // }, [search]);

   return (
      <Col lg={2} className="d-none d-lg-block fixed-left p-0 sidebar-right">
         <Navbar
            expand="lg"
            className="bg-body-tertiary dark-bg align-items-start sidebar-right"
            // bg="dark"
            // data-bs-theme="dark"
         >
            <Container className="d-flex flex-column sidebar-right" fluid>
               <Link to="/">
                  <Navbar.Brand>
                     <img
                        src="accets/logo/logo.png"
                        className="d-inline-block align-top my-3"
                        alt="Spotify logo"
                        width="131"
                        height="40"
                     />
                  </Navbar.Brand>
               </Link>
               <Nav className="me-auto d-flex flex-column">
                  <Link
                     to="/"
                     className="d-flex align-items-center text-white mx-2 my-1 link-underline link-underline-opacity-0"
                  >
                     <HouseDoorFill className="me-2" />
                     Home
                  </Link>
                  <Link
                     to="/"
                     className="d-flex align-items-center text-white mx-2 my-1 link-underline link-underline-opacity-0"
                  >
                     <BookFill className="me-2" />
                     Your Libruary
                  </Link>
               </Nav>
               <Form className="d-flex">
                  <Form.Control
                     size="sm"
                     type="search"
                     placeholder="Search"
                     className="me-0 rounded-start rounded-0 mt-2"
                     aria-label="Search"
                     value={search}
                     onChange={handleChange}
                  />
                  <Button
                     size="sm"
                     className="rounded-end rounded-0 mt-2"
                     variant="outline-secondary"
                     type="submit"
                     onClick={handleSubmit}
                  >
                     GO
                  </Button>
               </Form>
            </Container>
         </Navbar>
         <Liked />
      </Col>
   );
}

export default SideBar;
