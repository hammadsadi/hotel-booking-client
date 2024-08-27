import PropTypes from "prop-types";
const TDataItem = ({ tData }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{tData}</p>
    </td>
  );
};
TDataItem.propTypes = {
  tData: PropTypes.string,
};
export default TDataItem;
