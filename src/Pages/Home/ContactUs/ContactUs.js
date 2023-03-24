import React from "react";
import appointment from "../../../assets/images/appointment.png"

const ContactUs = () => {
  return (
    <div className="py-8" style={{ background: `url(${appointment})` }}>
      <h1 className="text-center primary text-2xl text-cyan-300 font-bold">Contact Us</h1>
      <h2 className="text-center text-4xl text-white py-4">Stay Connect With Us</h2>
      <div className="grid place-content-center space-y-4">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-full"
        />
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-full"
          />
        </div>
        <div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-full"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary w-full">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
