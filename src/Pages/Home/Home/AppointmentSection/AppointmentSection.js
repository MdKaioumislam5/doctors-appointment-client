import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";

const AppointmentSection = () => {
  return (
    <section className="" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="max-w-sm rounded-lg -mt-20 shadow-2xl"
            alt=""
          />
          <div className=" text-white">
            <h1 className="primary text-2xl text-cyan-300 font-bold">
              Appointment
            </h1>
            <h1 className="text-5xl font-bold">Make an appointment Today!</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
