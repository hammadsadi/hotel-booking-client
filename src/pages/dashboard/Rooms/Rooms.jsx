import { useState } from "react";
import AddRoomForm from "../../../components/Dashboard/Forms/AddRoomFom";
import MyModal from "../../../components/Modals/AddModal/MyModal";
import DashboardBtn from "../../../components/Shared/DashBoardBtn/DashboardBtn";
import RoomDataRow from "../../../components/Shared/RoomDataRow/RoomDataRow";
import THeadItem from "../../../components/Shared/TableHeading/THeadItem";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toastAlert from "../../../utils/toastAlert";
import { uploadImageToFirebase } from "../../../utils/uploadImageToFirebase";
import useGetAllRooms from "../../../hooks/useGetAllRooms";
import RoomEditForm from "../../../components/Dashboard/Forms/RoomEditForm";
import DeletePopup from "../../../components/Shared/DeletePopup/DeletePopup";

const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Update Modal
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [singleRoom, setSingleRoom] = useState({});
  // Delete Hotel
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [roomLoading, setRoomLoading] = useState(false);
  const [resetImage, setRestImage] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [rooms, refetch] = useGetAllRooms();

  // close
  const close = () => {
    setIsOpen(false);
  };

  /**
   * Add Room
   */

  // handleSubmitForm
  const handleSubmitForm = async (e, selectedImages) => {
    e.preventDefault();
    const form = e.target;
    const hotel = form.hotel.value;
    const roomName = form.roomName.value;
    const amenities = form.amenities.value;
    const roomNumber = parseInt(form.roomNumber.value);
    const type = form.type.value;
    const bedrooms = parseInt(form.bedrooms.value);
    const rentPerDay = parseInt(form.rentPerDay.value);

    // Validation
    if (
      !hotel ||
      !roomName ||
      !roomNumber ||
      !type ||
      !bedrooms ||
      !rentPerDay
    ) {
      return toastAlert("All Fields Are Required", "error");
    }

    try {
      setRoomLoading(true);
      const uploadedImage = await uploadImageToFirebase(selectedImages);
      const roomInfo = {
        hotel,
        roomName,
        roomNumber,
        type,
        amenities,
        bedrooms,
        rentPerDay,
        photo: uploadedImage,
      };
      const { data } = await axiosSecure.post("/api/v1/room", roomInfo);
      if (data.success) {
        setRoomLoading(false);
        e.target.reset();
        setRestImage(true);
        toastAlert("Room Created Successful", "success");
        refetch();
      }
      if (!data.success) {
        setRoomLoading(false);
        toastAlert(data.message, "error");
        // refetch();
      }
      console.log(data);
    } catch (error) {
      setRoomLoading(false);
      console.log(error.message);
    }
  };

  /**
   * Update Room
   */
  // close
  const closeUpdateModal = () => {
    setIsOpenUpdateModal(false);
  };

  // handleShowRoomUpdateModal
  const handleShowRoomUpdateModal = (room) => {
    setIsOpenUpdateModal(!isOpenUpdateModal);
    setSingleRoom(room);
  };

  // Handle Room Submit Form
  const handleSubmitRoomForm = async (e, selectedImages, existImages) => {
    e.preventDefault();
    const form = e.target;
    const hotel = form.hotel.value;
    const roomName = form.roomName.value;
    const amenities = form.amenities.value;
    const roomNumber = parseInt(form.roomNumber.value);
    const type = form.type.value;
    const bedrooms = parseInt(form.bedrooms.value);
    const rentPerDay = parseInt(form.rentPerDay.value);

    try {
      setRoomLoading(true);

      let editedPhoto = existImages;
      console.log("From Edit", selectedImages);
      if (selectedImages.length > 0) {
        const uploadedImage = await uploadImageToFirebase(selectedImages);
        editedPhoto = [...uploadedImage, ...existImages];
      }
      const roomInfo = {
        hotel,
        roomName,
        roomNumber,
        type,
        amenities,
        bedrooms,
        rentPerDay,
        photo: editedPhoto,
      };
      const { data } = await axiosSecure.put(
        `/api/v1/room/update/${singleRoom?._id}`,
        roomInfo
      );
      if (data.success) {
        setRoomLoading(false);
        toastAlert("Room Created Successful", "success");
        refetch();
      }
      if (!data.success) {
        setRoomLoading(false);
        toastAlert(data.message, "error");
        // refetch();
      }
    } catch (error) {
      setRoomLoading(false);
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
  const handleDeleteRoom = (id) => {
    setIsOpenDeleteModal(true);
    setRoomId(id);
  };

  // handleDeleteSingRoom
  const handleDeleteSingRoom = async () => {
    try {
      const { data } = await axiosSecure.put(`/api/v1/room/delete/${roomId}`);
      if (data.success) {
        setIsOpenDeleteModal(false);
        toastAlert("Room Deleted Successful", "success");
        refetch();
      }
      if (!data.success) {
        setRoomLoading(false);
        toastAlert(data.message, "error");
        setIsOpenDeleteModal(false);
      }
    } catch (error) {
      setRoomLoading(false);
      setIsOpenDeleteModal(false);
      console.log(error.message);
    }
  };
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="text-right">
        <DashboardBtn label="Add Room" handleModal={() => setIsOpen(!isOpen)} />
      </div>
      {/* Add Room Modal */}
      <MyModal close={close} isOpen={isOpen} large={true}>
        <AddRoomForm
          handleSubmitForm={handleSubmitForm}
          roomLoading={roomLoading}
          resetImage={resetImage}
        />
      </MyModal>

      {/* Update Room Modal */}
      <MyModal close={closeUpdateModal} isOpen={isOpenUpdateModal} large={true}>
        <RoomEditForm
          handleSubmitForm={handleSubmitRoomForm}
          roomLoading={roomLoading}
          singleRoom={singleRoom}
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
          subTitle="Do You Want to Delete This Room"
          setIsOpenDeleteModal={setIsOpenDeleteModal}
          deleteItem={handleDeleteSingRoom}
        />
      </MyModal>
      <div className="pb-4">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 pt-1 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <THeadItem thHeading="Name" />
                  <THeadItem thHeading="Hotel" />
                  <THeadItem thHeading="Number" />
                  <THeadItem thHeading="Type" />
                  <THeadItem thHeading="Bedrooms" />
                  <THeadItem thHeading="Rent Per Day" />
                  <THeadItem thHeading="Created At" />
                  <THeadItem thHeading="Action" />
                </tr>
              </thead>
              <tbody>
                {/* Table Row Data */}
                {rooms?.map((room) => (
                  <RoomDataRow
                    key={room._id}
                    room={room}
                    handleShowRoomUpdateModal={handleShowRoomUpdateModal}
                    handleDeleteRoom={handleDeleteRoom}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
