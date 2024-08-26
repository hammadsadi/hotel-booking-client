import PropTypes from "prop-types";
const DashboardBtn = ({ label, handleModal }) => {
  return (
    <button
      onClick={handleModal}
      className="bg-primary py-1 px-3 text-white rounded-md"
    >
      {label}
    </button>
  );
};
DashboardBtn.propTypes = {
  label: PropTypes.string,
  handleModal: PropTypes.func,
};
export default DashboardBtn;
