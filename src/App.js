import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import menu from "./menu.jpg";
import footer from "./footer.jpg";
import VerticalSocialMedia from "./components/Verticalcomponent";
import Chatbot from "./components/Chatbot";
import TestimonialCarousel from "./components/Testimonial";
import OurServices from "./components/OurService";
import InstagramPost from './components/InstagramPost'
import Footer from './components/Footer'

const HeartAnimation = () => {
  const [isPumping, setIsPumping] = useState(false);

  // Toggle the pumping animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPumping(() => true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <VerticalSocialMedia />
      <div className="grid-container">
        <div className="full-width-column-0">
          <Header />
        </div>
        <div className="full-width-column-1">
          <div className="heart-animation-container">
            <div className={`heart ${isPumping ? "pumping" : ""}`}>
              <img src="/heart.png" alt="company" />
            </div>
          </div>
        </div>
        <div className="sidebar">
          <img className="sidebarimage" src={menu} alt="menu" />
        </div>
        <div className="row2col1">
          <h2>The Nail Lab</h2>
          <p>
            We at Gold & Pink have a relaxing atmosphere with comfortable
            seating and a pleasant ambiance. Our nail technicians are
            well-trained and knowledgeable about the latest trends and
            techniques in nail care. We also use high-quality products that will
            be gentle on your nails and we provide long-lasting results. Our
            nail bar has a wide range of colours and designs to choose from and
            specialises in custom designs.
          </p>
        </div>
        <div className="footer">
          <img src={footer} width={675} height={392} alt="menu" />
        </div>
      </div>
      <TestimonialCarousel />
      <OurServices />
      <InstagramPost />
      <Footer />
      <Chatbot />
    </>
  );
};

export default HeartAnimation;
