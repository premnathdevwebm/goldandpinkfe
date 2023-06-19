import "./App.css";
import menu from "./menu.jpg";
import footer from "./footer.jpg";
import VerticalSocialMedia from "./components/Verticalcomponent";
import HeartPump from "./components/HeartPump/HeartPump";
import TestimonialCarousel from "./components/Testimonial";
import OurServices from "./components/OurService";
import InstagramPost from "./components/InstagramPost";


const HeartAnimation = () => {
 

  return (
    <>
      <VerticalSocialMedia />
      <HeartPump />
      <div className="rowcontainer1">
        <div className="col01">
          <img className="imag1" src={menu} alt="menu" />
        </div>
        <div className="col01">
          <div className="textcontent">
            <h2>The Nail Lab</h2>
            <p>
              We at Gold & Pink have a relaxing atmosphere with comfortable
              seating and a pleasant ambiance. Our nail technicians are
              well-trained and knowledgeable about the latest trends and
              techniques in nail care. We also use high-quality products that
              will be gentle on your nails and we provide long-lasting results.
              Our nail bar has a wide range of colours and designs to choose
              from and specialises in custom designs.
            </p>
          </div>
            <img src={footer} alt="menu" />
        </div>
      </div>
      <br />
      <br />
      <TestimonialCarousel />
      <OurServices />
      <InstagramPost />
    </>
  );
};

export default HeartAnimation;
