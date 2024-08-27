import TDataItem from "../TDataItem/TDataItem";
import { LuTrash } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutlineAddBox } from "react-icons/md";
const RoomDataRow = () => {
  return (
    <tr>
      <TDataItem tData="adfsafd" />
      <TDataItem tData="adfsafd" />
      <TDataItem tData="323" />
      <TDataItem tData="standard" />
      <TDataItem tData="5" />
      <TDataItem tData="570" />
      <TDataItem tData="570" />
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-1">
        <span className=" cursor-pointer inline-block  font-semibold text-primary/70 leading-tight">
          <span className="">
            {" "}
            <FaPenToSquare />{" "}
          </span>
        </span>
        <span className=" cursor-pointer inline-block  font-semibold text-rose-600 leading-tight">
          <span className="">
            <LuTrash />
          </span>
        </span>
        <span className=" cursor-pointer inline-block  font-semibold text-green-700 leading-tight -mb-[1px]">
          <span className="">
            <MdOutlineAddBox size={16} />
          </span>
        </span>
      </td>
    </tr>
  );
};

export default RoomDataRow;
