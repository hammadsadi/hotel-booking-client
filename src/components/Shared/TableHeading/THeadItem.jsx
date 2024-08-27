import PropTypes from "prop-types";
const THeadItem = ({ thHeading }) => {
  return (
    <th
      scope="col"
      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
    >
      {thHeading}
    </th>
  );
};
THeadItem.propTypes = {
  thHeading: PropTypes.string,
};
export default THeadItem;
