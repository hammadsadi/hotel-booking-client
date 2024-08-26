import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../pages/Loader/Loader";
import PropTypes from "prop-types";
const AdminPrivate = ({ children }) => {
  const { loading } = useAuth();
  const [role, isLoading] = useRole();

  // Loading
  if (loading || isLoading) return <Loader />;

  // Check Admin
  if (role?.isAdmin) return children;
  return <Navigate to="/dashboard" />;
};
AdminPrivate.propTypes = {
  children: PropTypes.element,
};
export default AdminPrivate;
