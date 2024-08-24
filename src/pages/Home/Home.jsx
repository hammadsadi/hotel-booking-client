import useAuth from "../../hooks/useAuth";
import Loader from "../Loader/Loader";

const Home = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loader />;
  }
  return <div>Home</div>;
};

export default Home;
