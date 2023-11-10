import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function SideBar() {
   const [search, setSearch] = useState("");

   const handleChange = (e) => {
      setSearch(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(search.trim());
   };

   useEffect(() => {
      if (search) {
         fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
               search
         )
            .then((response) => {
               if (!response.ok) {
                  throw new Error("Fetch went bad!");
               }
               return response.json();
            })
            .then((data) => {
               console.log("data receaved!", data);
            })
            .catch((err) => console.log("ERROR ", err));
      }
   }, [search]);

   return (
      <Col lg={2} className="d-none d-lg-block fixed-left p-0">
         <Navbar
            expand="lg"
            className="bg-body-tertiary dark-bg h-100 align-items-start"
            bg="dark"
            data-bs-theme="dark"
         >
            <Container className="d-flex flex-column" fluid>
               <Navbar.Brand href="#home">
                  <img
                     src="accets/logo/logo.png"
                     className="d-inline-block align-top my-3"
                     alt="Spotify logo"
                     width="131"
                     height="40"
                  />
               </Navbar.Brand>
               <Nav className="me-auto d-flex flex-column">
                  <Nav.Link
                     href="#home"
                     className="d-flex align-items-center text-white"
                  >
                     <HouseDoorFill className="me-2" />
                     Home
                  </Nav.Link>
                  <Nav.Link
                     href="#link"
                     className="d-flex align-items-center text-white"
                  >
                     <BookFill className="me-2" />
                     Your Libruary
                  </Nav.Link>
               </Nav>
               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-0 rounded-start rounded-0"
                     aria-label="Search"
                     value={search}
                     onChange={handleChange}
                  />
                  <Button
                     className="rounded-end rounded-0"
                     variant="outline-secondary"
                     type="submit"
                     onClick={handleSubmit}
                  >
                     GO
                  </Button>
               </Form>
            </Container>
         </Navbar>
      </Col>
   );
}

export default SideBar;
