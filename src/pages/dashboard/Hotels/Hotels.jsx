import { useState } from "react";
import DashboardBtn from "../../../components/Shared/DashBoardBtn/DashboardBtn";
import HotelDataRow from "../../../components/Shared/HotelDataRow/HotelDataRow";
import MyModal from "../../../components/Modals/AddModal/MyModal";
import AddHotelForm from "../../../components/Dashboard/Forms/AddHotelForm";
import { uploadImageToFirebase } from "../../../utils/uploadImageToFirebase";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toastAlert from "../../../utils/toastAlert";
import useGetAllHotels from "../../../hooks/useGetAllHotels";
import HotelEditForm from "../../../components/Dashboard/Forms/HotelEditForm";
import DeletePopup from "../../../components/Shared/DeletePopup/DeletePopup";

const Hotels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hotelLoading, setHotelLoading] = useState(false);
  const [resetImage, setRestImage] = useState(false);
  // Edit Hotel
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [singleHotel, setSingleHotel] = useState({});
  // Delete Hotel
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [hotelId, setHotelId] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [hotels, refetch] = useGetAllHotels();
  // Handle Modal
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  // close
  const close = () => {
    setIsOpen(false);
  };

  // handleSubmitForm
  const handleSubmitForm = async (e, selectedImages) => {
    e.preventDefault();
    const form = e.target;
    const name = form.hotelName.value;
    const owner = form.ownerName.value;
    const email = form.email.value;
    const phone = form.phoneNumber.value;
    const location = form.location.value;
    try {
      setHotelLoading(true);
      const uploadedImage = await uploadImageToFirebase(selectedImages);
      const hotelInfo = {
        name,
        email,
        owner,
        phone,
        location,
        media: uploadedImage,
      };
      const { data } = await axiosSecure.post("/api/v1/hotel", hotelInfo);
      if (data.hotel) {
        setHotelLoading(false);
        e.target.reset();
        setRestImage(true);
        toastAlert("Hotel Created Successful", "success");
        refetch();
      }
    } catch (error) {
      setHotelLoading(false);
      console.log(error.message);
    }
  };

  /**
   * Edit Hotel
   */
  // Edit Modal close
  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };
  // Handle Open Edit Modal
  const handleEditOpenModal = (hotel) => {
    setIsOpenEditModal(true);
    setSingleHotel(hotel);
  };

  // handleEditSubmitForm
  const handleEditSubmitForm = async (e, existImages, selectedImages) => {
    e.preventDefault();
    const form = e.target;
    const name = form.hotelName.value;
    const owner = form.ownerName.value;
    const email = form.email.value;
    const phone = form.phoneNumber.value;
    const location = form.location.value;
    const hotelPhoto = Array.from(form.hotelPhoto.files);
    try {
      setHotelLoading(true);
      let editedPhoto = existImages;
      console.log("From Edit", selectedImages);
      if (hotelPhoto.length > 0) {
        const uploadedImage = await uploadImageToFirebase(selectedImages);
        editedPhoto = [...uploadedImage, ...existImages];
      }
      const hotelEditInfo = {
        name,
        email,
        owner,
        phone,
        location,
        media: editedPhoto,
      };
      const { data } = await axiosSecure.put(
        `/api/v1/hotel/update/${singleHotel?._id}`,
        hotelEditInfo
      );
      if (data.hotel) {
        setHotelLoading(false);
        toastAlert("Hotel Created Successful", "success");
        refetch();
      }
      console.log(data);
    } catch (error) {
      setHotelLoading(false);
      console.log(error.message);
    }
  };

  /**
   * Delete Hotel
   */
  // Delete Modal close
  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  // Handle Delete Hotel
  const handleDeleteHotel = (id) => {
    setIsOpenDeleteModal(true);
    setHotelId(id);
  };
  const handleDeleteSingleHotel = async () => {
    try {
      const { data } = await axiosSecure.delete(
        `/api/v1/hotel/delete/${hotelId}`
      );
      if (data.hotel) {
        toastAlert("Hotel Deleted Successful", "success");
        refetch();
        setIsOpenDeleteModal(false);
      }
    } catch (error) {
      toastAlert(error.message, "error");
      setIsOpenDeleteModal(false);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-right">
          <DashboardBtn label="Add Hotel" handleModal={handleModal} />
          {/* Add Modal */}
          <MyModal close={close} isOpen={isOpen} large={true}>
            <AddHotelForm
              handleSubmitForm={handleSubmitForm}
              hotelLoading={hotelLoading}
              resetImage={resetImage}
            />
          </MyModal>

          {/* Edit Modal */}
          <MyModal close={closeEditModal} isOpen={isOpenEditModal} large={true}>
            <HotelEditForm
              handleEditSubmitForm={handleEditSubmitForm}
              hotelLoading={hotelLoading}
              singleHotel={singleHotel}
            />
          </MyModal>

          {/* Delete Modal */}
          <MyModal
            close={closeDeleteModal}
            isOpen={isOpenDeleteModal}
            large={false}
          >
            <DeletePopup
              title="Are You Sure?"
              subTitle="Do You Want to Delete This Hotel"
              setIsOpenDeleteModal={setIsOpenDeleteModal}
              deleteItem={handleDeleteSingleHotel}
            />
          </MyModal>
        </div>
        <div className="pb-4">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 pt-1 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      Owner
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      Phone
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Row Data */}
                  {hotels?.map((item) => (
                    <HotelDataRow
                      key={item._id}
                      hotel={item}
                      handleEditOpenModal={handleEditOpenModal}
                      handleDeleteHotel={handleDeleteHotel}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
