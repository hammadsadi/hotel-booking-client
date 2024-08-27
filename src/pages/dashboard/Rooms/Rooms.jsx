import { useState } from "react";
import AddRoomForm from "../../../components/Dashboard/Forms/AddRoomFom";
import MyModal from "../../../components/Modals/AddModal/MyModal";
import DashboardBtn from "../../../components/Shared/DashBoardBtn/DashboardBtn";
import RoomDataRow from "../../../components/Shared/RoomDataRow/RoomDataRow";
import THeadItem from "../../../components/Shared/TableHeading/THeadItem";

const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="text-right">
        <DashboardBtn label="Add Room" handleModal={() => setIsOpen(!isOpen)} />
      </div>
      {/* Add Room Modal */}
      <MyModal close={close} isOpen={isOpen} large={true}>
        <AddRoomForm />
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
                <RoomDataRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
