import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  console.log(option);
  const { name, slots } = option;
  return (
    <div className="grid place-content-center my-6">
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold text-cyan-300">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              onClick={() => setTreatment(option)}
            >
             Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
