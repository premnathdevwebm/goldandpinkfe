import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Pellentesque nec elit nec dolor tincidunt fringilla eu nec mauris.",
    },
    // Add more testimonials as needed
  ];

  return (
    <Carousel interval={3000} autoPlay infiniteLoop>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
