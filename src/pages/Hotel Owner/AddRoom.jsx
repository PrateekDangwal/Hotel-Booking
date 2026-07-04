import React, { useState } from 'react';
import Titel from '../../components/Titel';
import { assets } from '../../assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="mt-16">
      <Titel
        align="left"
        font="outfit"
        titel="Add Room"
        subTitel="Fill in the details carefully and accurately with room details, pricing, and amenities to enhance the user booking experience."
      />

      {/* Upload Images */}
      <p className="text-gray-800 mt-10">Images</p>

      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="h-20 w-20 object-cover cursor-pointer rounded border"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />

            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({
                  ...images,
                  [key]: e.target.files[0],
                })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="w-full flex max-sm:flex-col sm:gap-6 mt-6">
        <div className="flex-1 max-w-xs">
          <p className="text-gray-800">Room Type</p>

          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({
                ...inputs,
                roomType: e.target.value,
              })
            }
            className="border border-gray-300 rounded p-2 w-full mt-1"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className="text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>

          <input
            type="number"
            placeholder="0"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({
                ...inputs,
                pricePerNight: Number(e.target.value),
              })
            }
            className="border border-gray-300 rounded p-2 w-32 mt-1"
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 mt-8">Amenities</p>

      <div className="grid grid-cols-2 gap-3 mt-2 max-w-lg">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`amenity${index}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />

            <label
              htmlFor={`amenity${index}`}
              className="text-gray-700 cursor-pointer"
            >
              {amenity}
            </label>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary text-white px-8 py-2 rounded mt-8 hover:opacity-90 cursor-pointer"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;