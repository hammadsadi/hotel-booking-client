import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavItem = ({ label, dLink }) => {
  return (
    <li>
      <Link
        className="text-gray-500 transition hover:text-gray-500/75"
        to={dLink}
      >
        {label}
      </Link>
    </li>
  );
};
NavItem.propTypes = {
  label: PropTypes.string,
  dLink: PropTypes.string,
};
export default NavItem;
