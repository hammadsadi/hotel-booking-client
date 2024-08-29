import TDataItem from "../TDataItem/TDataItem";
import PropTypes from "prop-types";
import { LuTrash } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
const RoomDataRow = ({ room, handleShowRoomUpdateModal, handleDeleteRoom }) => {
  return (
    <tr>
      <TDataItem tData={room?.roomName} />
      <TDataItem tData={room?.hotel?.name} />
      <TDataItem tData={room?.roomNumber} />
      <TDataItem tData={room?.type} />
      <TDataItem tData={room?.bedrooms} />
      <TDataItem tData={room?.rentPerDay} />
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {new Date(room?.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          {new Date(room?.createdAt).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-1">
        <span
          onClick={() => handleShowRoomUpdateModal(room)}
          className=" cursor-pointer inline-block  font-semibold text-primary/70 leading-tight"
        >
          <span className="">
            {" "}
            <FaPenToSquare />{" "}
          </span>
        </span>
        <span
          onClick={() => handleDeleteRoom(room?._id)}
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

RoomDataRow.propTypes = {
  room: PropTypes.object,
  handleShowRoomUpdateModal: PropTypes.func,
  handleDeleteRoom: PropTypes.func,
};
export default RoomDataRow;
