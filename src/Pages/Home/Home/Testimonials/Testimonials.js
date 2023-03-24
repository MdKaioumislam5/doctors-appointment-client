import React from "react";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Winson Herry",
      from: "California",
      img: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Herry",
      from: "California",
      img: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Herry",
      from: "California",
      img: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="primary text-2xl text-cyan-300 font-bold">
          Testimonial
        </h1>
        <h2 className="text-4xl">What Our Patients Says</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
