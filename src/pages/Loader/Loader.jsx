import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ImSpinner9 className="text-5xl animate-spin text-primary" />
    </div>
  );
};

export default Loader;
