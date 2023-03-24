import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import teeth from "../../../../assets/images/whitening.png";
import treatment from "../../../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 1,
      name: "Fluoride Treatment",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 1,
      name: "Fluoride Treatment",
      img: teeth,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="primary text-2xl text-cyan-300 font-bold text-center">
          Our Services
        </h1>
        <h2 className="text-4xl text-center">Services We Provide</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="hero  justify-center space-x-8">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
