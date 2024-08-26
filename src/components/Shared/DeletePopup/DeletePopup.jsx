import PropTypes from "prop-types";
const DeletePopup = ({ title, subTitle, setIsOpenDeleteModal, deleteItem }) => {
  return (
    <div>
      <h2 className="text-lg mb-2 text-center md:text-2xl font-bold">
        {title}
      </h2>
      <div className="mt-1">
        <p className="text-sm text-gray-500 text-center">{subTitle}</p>
      </div>
      <hr className="mt-8 " />
      <div className="flex mt-2 justify-around">
        <button
          onClick={() => setIsOpenDeleteModal(false)}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          No
        </button>
        <button
          onClick={deleteItem}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Yes
        </button>
      </div>
    </div>
  );
};
DeletePopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  setIsOpenDeleteModal: PropTypes.func,
  deleteItem: PropTypes.func,
};
export default DeletePopup;
