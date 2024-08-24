import toast from "react-hot-toast";

const toastAlert = (msg, type) => {
  return toast[type](msg);
};

export default toastAlert;
