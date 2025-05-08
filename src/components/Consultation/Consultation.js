import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";

function Consultation() {
  const endRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    gtag("event", "Consultation page", {
      event_category: "Page view",
      event_label: "Consultation page view",
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight -
          document.getElementById("scrollDown")?.getBoundingClientRect().bottom >
        50
      ) {
        setShowScrollBtn(false);
      } else {
        setShowScrollBtn(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optionally reset the form
    // setFormData({ name: "", email: "", message: "" });
  };

  const trackCalendly = () => {
    window.open("https://calendly.com/madhav-kabra730/30min", "_blank");
    gtag("event", "Calendly", {
      event_category: "Click",
      event_label: "Calendly consultation link clicked",
    });
  };

  return (
    <section>
      <Helmet>
        <title>Consultation | Work With Madhav Kabra</title>
        <meta
          name="description"
          content="Book a consultation with Madhav Kabra for project planning, full-stack development, code review, or personalized developer guidance."
        />
        <meta
          name="keywords"
          content="developer consultation, hire web developer, freelance React developer, full-stack advice, Madhav Kabra contact"
        />
        <meta property="og:title" content="Consultation | Madhav Kabra" />
        <meta
          property="og:description"
          content="Schedule a session with Madhav Kabra to discuss your web project or technical needs."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- Hero Section --- */}
      <Container fluid className="consultation-section" id="consultation">
        <Particle />
        <Container className="consultation-content">
          <Row>
            <Col md={7} className="consultation-header">
              <h1 className="heading">Let’s Make Your Ideas a Reality!</h1>
              <h4 className="sub-heading mb-4">
                Need help with your product, startup, or portfolio? I’m here to help.
              </h4>

              <div className="text-white" style={{ paddingRight: 40 }}>
                <p>
                  With over 4 years of remote work experience, I offer expert guidance,
                  clean code, and scalable architecture for both early-stage products and
                  enterprise-level systems. Book a free call or review my background below.
                </p>
                <div className="home-btns mt-4">
                  <Button className="book-btn" size="lg" onClick={trackCalendly}>
                    Book a Free Consultation
                  </Button>
                  <Button
                    className="book-btn resume-btn"
                    size="lg"
                    as={Link}
                    to="/resume"
                  >
                    View My Resume
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center">
              <Player
                src={require("../../Assets/codeanimation.json")}
                autoplay
                loop
                style={{ height: "450px", maxWidth: "100%" }}
              />
            </Col>
          </Row>

          <div style={{ opacity: showScrollBtn ? 1 : 0 }}>
            <BsChevronDoubleDown
              id="scrollDown"
              onClick={scrollToBottom}
              className="scroll-btn"
            />
          </div>
        </Container>
      </Container>

      {/* --- Consultation Form Section --- */}
      <section ref={endRef} className="consultation-form-section py-5">
        <Container>
          <h2 className="text-center mb-4 text-white">Request a Consultation</h2>
          <Row>
            <Col md={8} className="offset-md-2">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-white">
                    Tell me about your project
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Briefly describe your project or consultation request"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="purple-btn"
                  >
                    Submit Request
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default Consultation;
