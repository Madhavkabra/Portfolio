import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import resumeData from '../resumeData';
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
function Experience() {

    useEffect(() => {
        gtag('event', 'Experience page', {
            'event_category': 'Page view',
            'event_label': 'Experience page view',
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
            <Particle />
            <Container>
                <h1 className="experience-heading">
                    My <strong className="purple">Experience</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are some of the roles I've taken on over the years.
                </p>

                <div className="experience-card-container" >
                    {resumeData.experience.map((experience, index) => (
                        <ExperienceCard
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
