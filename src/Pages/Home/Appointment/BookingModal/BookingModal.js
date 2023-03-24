import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(name, slot, email, phone)
    const booking = {
        selectedDate: date,
        treatment:name,
        patient: name,
        slot,
        email,
        phone
    }
    console.log(booking);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid gap-4 grid-cols-1">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) =><option key={index} value={slot}>{slot}</option>)}
            </select>
            <input
            name="name"
              type="text"
              placeholder="Name here"
              className="input input-bordered w-full"
            />
            <input
            name="email"
              type="email"
              placeholder="Email here"
              className="input input-bordered w-full"
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone here"
              className="input input-bordered w-full"
            />
            <input
            value="submit"
              type="submit"
              placeholder="Phone here"
              className="input input-bordered w-full btn btn-ghost"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
