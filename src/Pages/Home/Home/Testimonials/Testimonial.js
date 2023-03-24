import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, from, img, description } = testimonial;
  return (
    <div>
      <div className="card w-96">
        <div className="card-body items-center text-center">
          <p>{description}</p>
          <div className="card-actions flex justify-center items-center mt-4">
            <div className="avatar ">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt=""/>
              </div>
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="text-xl font-bold">{from}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
