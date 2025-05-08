import React, { useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import resumeData from "../resumeData";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";

function Experience() {

    useEffect(() => {
        gtag('event', 'Experience page', {
            event_category: 'Page view',
            event_label: 'Experience page view',
        });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Container fluid className="experience-section">
             <Helmet>
               <title>Experience | Madhav Kabra - Full-Stack Developer</title>
                <meta
                  name="description"
                  content="Explore the work experience of Madhav Kabra in full-stack web development, covering roles in frontend, backend, and cross-functional teams."
                />
               <meta
                 name="keywords"
                  content="developer experience, Madhav Kabra, full-stack jobs, React experience, Node.js work, software engineering career, portfolio"
               />
                <meta name="author" content="Madhav Kabra" />
                <meta property="og:title" content="Experience | Madhav Kabra" />
                <meta
                  property="og:description"
                  content="Discover Madhav Kabra's past roles, skills applied, and contributions as a full-stack web developer."
               />
                <meta property="og:type" content="profile" />
             </Helmet>
            <Particle />
            <Container>
                <h1 className="experience-heading">
                    My <strong className="purple">Experience</strong>
                </h1>
              <Col md={12} className="lottie-animation">
                <Player
                  src={require("../../Assets/experience.json")}
                  autoplay
                  loop
                  style={{ height: "400px" }}
                 />
               </Col>
                <p style={{ color: "white" }}>
                    Here are some of the roles I've taken on over the years.
                </p>

                <div className="experience-card-container" >
                    {resumeData.experience.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            company={experience.company}
                            role={experience.role}
                            duration={experience.startDate + " - " + experience.endDate}
                            location={experience.location}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
                </div>
            </Container>

            <Container fluid className="testimonial-section" style={{ marginTop: "50px" }}>
                <h1 className="testimonial-heading">
                    What <strong className="purple">Clients </strong> Say
                </h1>
                <Slider {...sliderSettings}>
                    {resumeData.testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <TestimonialCard
                                imgurl={testimonial.imgurl}
                                name={testimonial.name}
                                description={testimonial.description}
                                ratings={testimonial.ratings}
                                designation={testimonial.designation}
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </Container>
    );
}

export default Experience;
