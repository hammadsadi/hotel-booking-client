import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import RoomInfoItem from "../../components/Shared/RoomInfoItem/RoomInfoItem";

const RoomDetails = () => {
  // const [singleRoom, setSingleRoom] = useState({});
  const { id } = useParams();
  const { data: room, isLoading } = useQuery({
    queryKey: ["singleRoom", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/room/single/${id}`
      );
      return data;
    },
  });
  console.log(room);
  console.log(room?.amenities.split(","));
  if (isLoading) return <Loader />;
  return (
    <div>
      <MyContainer>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4 bg-white p-6 rounded-md">
            <div className="mb-3 md:mb-6">
              <p className="font-bold text-xl md:text-3xl">{room?.roomName}</p>
              <p className="text-sm text-gray-500">{room?.hotel?.name}</p>
            </div>
            <div className="">
              <PhotoProvider>
                <div className="foo grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                  {room?.hotel?.media.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <img
                        src={item}
                        alt=""
                        className="cursor-pointer w-full h-[150px] object-cover"
                      />
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
            </div>
            <div className="mt-3 md:mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <RoomInfoItem
                infoTitle="Rent Per Day"
                infoValue={room?.rentPerDay}
              />
              <RoomInfoItem infoTitle="Room Type" infoValue={room?.type} />
              <RoomInfoItem infoTitle="Capacity" infoValue="N/A" />
              <RoomInfoItem infoTitle="Bed Rom" infoValue={2} />
              <RoomInfoItem infoTitle="Email" infoValue={room?.hotel?.email} />
              <RoomInfoItem
                infoTitle="Phone Number"
                infoValue={room?.hotel?.phone}
              />
            </div>
            <div className="mt-5">
              <h3 className="mb-3 border-b font-bold">Amenities</h3>
              <div role="alert" className="space-y-4">
                {room?.amenities.split(",").map((anm, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <div className="flex-1">
                      <strong className="block font-normal text-sm text-gray-900">
                        {anm}
                      </strong>
                    </div>
                  </div>
                ))}
                {/* <div className="flex items-center gap-2">
                  <span className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>

                  <div className="flex-1">
                    <strong className="block font-normal text-sm text-gray-900">
                      Changes saved
                    </strong>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-md">
              <form noValidate="" className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="startDate" className="block text-sm">
                      Start date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="endDate" className="text-sm">
                        End date
                      </label>
                    </div>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default RoomDetails;
