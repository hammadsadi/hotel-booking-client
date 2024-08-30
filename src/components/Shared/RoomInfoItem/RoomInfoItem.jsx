import PropTypes from "prop-types";
const RoomInfoItem = ({ infoTitle, infoValue }) => {
  return (
    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 text-wrap">
      <div className="mt-1.5 sm:mt-0">
        <p className="text-gray-500">{infoTitle}</p>
        <p className="font-medium text-sm md:text-base ">{infoValue}</p>
      </div>
    </div>
  );
};
RoomInfoItem.propTypes = {
  infoTitle: PropTypes.string,
  infoValue: PropTypes.string,
};
export default RoomInfoItem;
