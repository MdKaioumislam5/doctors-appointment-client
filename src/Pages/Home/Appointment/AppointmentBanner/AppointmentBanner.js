import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
//   let footer = <p>Please pick a day.</p>;
//   if (selectedDate) {
//     footer = <p>You picked {format(selectedDate, "PP")}.</p>;
//   }
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker
              mode="single"
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
