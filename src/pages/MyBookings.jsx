import React, { useState } from "react";
import Titel from "../components/Titel";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-16 px-4 md:px-16 lg:px-24 xl:px-32">
      <Titel
        titel="My Bookings"
        subTitel="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">

        {/* Header */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timing</div>
          <div>Payment</div>
        </div>

        {/* Booking List */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid md:grid-cols-[3fr_2fr_1fr] gap-6 py-6 border-b border-gray-300 items-center"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="w-full md:w-44 h-32 rounded-lg shadow object-cover"
              />

              <div className="flex flex-col gap-2 mt-3 md:mt-0 md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="font-inter text-sm ml-2">
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img
                    src={assets.locationIcon}
                    alt="location-icon"
                    className="w-4"
                  />
                  <span>{booking.hotel.address}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img
                    src={assets.guestsIcon}
                    alt="guest-icon"
                    className="w-4"
                  />
                  <span>Guests: {booking.guests}</span>
                </div>

                <p className="font-medium">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/* Date & Timing */}
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Check In:</span>{" "}
                {booking.checkInDate}
              </p>

              <p>
                <span className="font-medium">Check Out:</span>{" "}
                {booking.checkOutDate}
              </p>

              <p>
                <span className="font-medium">Booked On:</span>{" "}
                {booking.createdAt}
              </p>
            </div>

            {/* Payment */}
            <div className="flex flex-col gap-3">
              <p
                className={`font-medium ${
                  booking.isPaid
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {booking.isPaid ? "Paid" : "Pending"}
              </p>

              <button className="bg-primary hover:bg-primary-dull transition-all text-white rounded-md px-6 py-2 cursor-pointer">
                View Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;