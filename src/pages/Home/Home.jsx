import HotelItem from "../../components/Shared/HotelItem/HotelItem";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import useAuth from "../../hooks/useAuth";
import useGetAllRooms from "../../hooks/useGetAllRooms";
import Loader from "../Loader/Loader";

const Home = () => {
  const { loading } = useAuth();
  const [rooms, , isLoading] = useGetAllRooms();
  if (loading || isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <section>
        <MyContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rooms?.map((room) => (
              <HotelItem key={room._id} room={room} />
            ))}
          </div>
        </MyContainer>
      </section>
    </div>
  );
};

export default Home;
