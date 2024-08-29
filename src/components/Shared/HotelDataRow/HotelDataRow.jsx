import PropTypes from "prop-types";
import { LuTrash } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
import TDataItem from "../TDataItem/TDataItem";

const HotelDataRow = ({ hotel, handleEditOpenModal, handleDeleteHotel }) => {
  return (
    <tr>
      <TDataItem tData={hotel?.name} />
      <TDataItem tData={hotel?.owner} />
      <TDataItem tData={hotel?.email} />
      <TDataItem tData={hotel?.phone} />
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {new Date(hotel?.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          {new Date(hotel?.createdAt).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-1">
        <span
          onClick={() => handleEditOpenModal(hotel)}
          className=" cursor-pointer inline-block  font-semibold text-primary/70 leading-tight"
        >
          <span className="">
            {" "}
            <FaPenToSquare />{" "}
          </span>
        </span>
        <span
          onClick={() => handleDeleteHotel(hotel._id)}
          className=" cursor-pointer inline-block  font-semibold text-rose-600 leading-tight"
        >
          <span className="">
            <LuTrash />
          </span>
        </span>
      </td>
    </tr>
  );
};

HotelDataRow.propTypes = {
  hotel: PropTypes.object,
  handleDeleteHotel: PropTypes.func,
  handleEditOpenModal: PropTypes.func,
};

export default HotelDataRow;
