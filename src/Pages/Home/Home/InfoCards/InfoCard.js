import { getByTitle } from "@testing-library/react";
import React from "react";

const InfoCard = ({ info }) => {
  const { title, img, description, bgClass } = info;
  return (
    <div className="grid justify-items-center align-center my-5">
      <div className={`card card-side bg-base-100 shadow-xl ${bgClass}  px-4`}>
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
