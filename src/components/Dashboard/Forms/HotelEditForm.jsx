import PropTypes from "prop-types";
import { ImSpinner2 } from "react-icons/im";
import { useEffect, useState } from "react";

const HotelEditForm = ({
  handleEditSubmitForm,
  hotelLoading,
  resetImage,
  singleHotel,
}) => {
  const [prevImages, setPrevImages] = useState([]);

  // Handle Prev Image
  const handlePrevImage = (e) => {
    const files = Array.from(e.target.files);
    setPrevImages(files);
  };
  // Reset Form
  useEffect(() => {
    if (resetImage) {
      setPrevImages([]);
    }
  }, [resetImage]);
  return (
    <div>
      <h2 className="text-lg text-center mb-5 md:text-2xl font-bold">
        Edit Hotel Info
      </h2>
      <div>
        <form
          noValidate=""
          onSubmit={handleEditSubmitForm}
          className="space-y-8"
        >
          <div className="flex gap-2">
            <div className="space-y-2">
              <label
                htmlFor="hotelName"
                className="block text-sm text-gray-500"
              >
                Hotel Name
              </label>
              <input
                type="text"
                name="hotelName"
                defaultValue={singleHotel?.name}
                id="hotelName"
                placeholder="Golden Hotel"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="ownerName"
                className="block text-sm text-gray-500"
              >
                Owner Name
              </label>
              <input
                type="text"
                name="ownerName"
                defaultValue={singleHotel?.owner}
                id="ownerName"
                placeholder="Hammad Sadi"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={singleHotel?.email}
                placeholder="goldenhotel@gmail.com"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm text-gray-500"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                defaultValue={singleHotel?.phone}
                placeholder="0176017****"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm text-gray-500">
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={singleHotel?.location}
                id="location"
                placeholder="Bangladesh"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="hotelPhoto"
                className="block text-sm text-gray-500"
              >
                Hotel Photo
              </label>
              <input
                type="file"
                name="hotelPhoto"
                onChange={handlePrevImage}
                multiple
                id="hotelPhoto"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center text-center">
            {prevImages.length > 0 ? (
              <>
                {prevImages.map((item) => (
                  <img
                    key={item.name}
                    src={URL.createObjectURL(item)}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                ))}
              </>
            ) : (
              <div className="flex gap-2 justify-center">
                {singleHotel?.media?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={hotelLoading}
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white disabled:cursor-not-allowed"
          >
            {hotelLoading ? (
              <ImSpinner2 className="animate-spin m-auto" />
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
HotelEditForm.propTypes = {
  handleEditSubmitForm: PropTypes.func,
  resetImage: PropTypes.bool,
  hotelLoading: PropTypes.bool,
  singleHotel: PropTypes.object,
};

export default HotelEditForm;
