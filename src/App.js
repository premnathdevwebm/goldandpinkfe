import "./App.css";
import VerticalSocialMedia from "./components/VerticalComponent/Verticalcomponent";
import HeartPump from "./components/HeartPump/HeartPump";
import MainContent from "./components/MainContent/MainContent";
import TestimonialCarousel from "./components/Testimonial/Testimonial";
import OurServices from "./components/OurService/OurService";
import InstagramPost from "./components/InstagramPost/InstagramPost";

const HeartAnimation = () => {
  return (
    <>
      <VerticalSocialMedia />
      <HeartPump />
      <MainContent />
      <TestimonialCarousel />
      <OurServices />
      <InstagramPost />
    </>
  );
};

export default HeartAnimation;
