import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Loading
  if (loading) return <Loader />;
  // Return Component
  if (user) return children;
  return <Navigate to="/sign-in" state={location.pathname} />;
};
PrivateRoutes.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoutes;
