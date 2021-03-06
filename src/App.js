import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import Faqs from "./components/Faqs/Faqs";
import Post from "./pages/post";
import { Modal, Button } from "react-bootstrap";
import GardenRemediesNewton from "./components/gardenremedies/GardenRemediesNewton";
import Partners from "./components/elements/Partners";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import BlogListing from "./components/bloglisting/BlogListing";
function App() {
  const [show, setShow] = React.useState(true);
  const [older, setOlder] = React.useState(true);

  const handleClose = () => {
    setShow(true);

    setOlder(false);
  };
  const handleYes = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Please verify your age to view this site</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {older
            ? "Are you at least 21 yrs old or a valid medical patient?"
            : "Unforuntately, you do not meet the requirements to view this site"}
        </Modal.Body>
        <Modal.Footer style={{ display: !older && "none" }}>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleYes}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="partners" element={<Partners />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="blog-listing" element={<BlogListing />} />
            <Route
              path="garden-remedies-newton"
              element={<GardenRemediesNewton />}
            />
            <Route
              path="/post/:id"
              // element={(props) => <Post {...props} />}
              element={<Post />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
