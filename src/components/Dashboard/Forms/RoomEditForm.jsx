import PropTypes from "prop-types";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useGetAllHotels from "../../../hooks/useGetAllHotels";

const RoomEditForm = ({ handleSubmitForm, roomLoading, singleRoom }) => {
  const [prevImages, setPrevImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [existImages, setExistImage] = useState(singleRoom?.photo);
  const [hotels] = useGetAllHotels();

  // Handle Prev Image
  const handlePrevImage = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPrevImages([...prevImages, ...newImages]);
    setSelectedImages(files);
  };

  const removeImage = (index) => {
    setPrevImages(prevImages.filter((_, i) => i !== index));
    setSelectedImages(selectedImages.filter((rm, rmIdx) => rmIdx !== index));
  };

  return (
    <div>
      <h2 className="text-lg text-center mb-5 md:text-2xl font-bold">
        Update Room
      </h2>
      <div>
        <form
          noValidate=""
          onSubmit={(e) => handleSubmitForm(e, selectedImages, existImages)}
          className="space-y-8"
        >
          <div className="flex gap-2">
            <div className="space-y-2 flex-1">
              <label
                htmlFor="hotelName"
                className="block text-sm text-gray-500"
              >
                Hotel
              </label>
              <select
                name="hotel"
                id=""
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              >
                {/* <option>Select Hotel</option> */}
                {hotels?.map((hotel) => (
                  <option
                    value={hotel?._id}
                    key={hotel._id}
                    selected={
                      hotels?.name === singleRoom?.hotel?.name ? true : false
                    }
                  >
                    {hotel?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 flex-1">
              <label htmlFor="roomName" className="block text-sm text-gray-500">
                Room Name
              </label>
              <input
                type="text"
                defaultValue={singleRoom?.roomName}
                name="roomName"
                id="roomName"
                placeholder="Couple Special..."
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2 flex-1">
              <label
                htmlFor="roomNumber"
                className="block text-sm text-gray-500"
              >
                Room Number
              </label>
              <input
                type="number"
                defaultValue={singleRoom?.roomNumber}
                name="roomNumber"
                id="name"
                placeholder="0"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2 flex-1">
              <label htmlFor="type" className="block text-sm text-gray-500">
                Type
              </label>
              <select
                name="type"
                id=""
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              >
                <option>Select Type</option>
                <option
                  value="basic"
                  selected={singleRoom?.type === "basic" ? true : false}
                >
                  Basic
                </option>
                <option
                  value="standard"
                  selected={singleRoom?.type === "standard" ? true : false}
                >
                  Standard
                </option>
                <option
                  value="premium"
                  selected={singleRoom?.type === "premium" ? true : false}
                >
                  Premium
                </option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <label htmlFor="bedrooms" className="block text-sm text-gray-500">
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                defaultValue={singleRoom?.bedrooms}
                id="bedrooms"
                placeholder="Bedrooms"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="rentPerDay"
                className="block text-sm text-gray-500"
              >
                Rent Per Day
              </label>
              <input
                type="number"
                name="rentPerDay"
                defaultValue={singleRoom?.rentPerDay}
                id="rentPerDay"
                placeholder="Rent Per day"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <label
                htmlFor="amenities"
                className="block text-sm text-gray-500"
              >
                Amenities (Optional)
              </label>
              <textarea
                name="amenities"
                id="amenities"
                defaultValue={singleRoom?.amenities}
                placeholder="Amenities"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              ></textarea>
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
            <div className="flex gap-2 justify-center ">
              {existImages.map((img, idx) => (
                <div key={idx} className="relative">
                  <img src={img} alt="" className="w-20 h-20 object-cover" />
                  <span
                    onClick={() => {
                      setExistImage(
                        existImages.filter((it, index) => index !== idx)
                      );
                    }}
                    className="absolute top-1 right-1 text-primary cursor-pointer"
                  >
                    <RxCross1 />
                  </span>
                </div>
              ))}
            </div>
            {prevImages.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img.preview}
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <span
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 text-primary cursor-pointer"
                >
                  <RxCross1 />
                </span>
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={roomLoading}
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white disabled:cursor-not-allowed"
          >
            {roomLoading ? (
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
RoomEditForm.propTypes = {
  handleSubmitForm: PropTypes.func,
  singleRoom: PropTypes.object,
  roomLoading: PropTypes.bool,
};

export default RoomEditForm;
