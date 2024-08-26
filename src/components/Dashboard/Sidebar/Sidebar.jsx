import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { LuHotel } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { FaList } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  console.log(role.isAdmin);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link
              className="text-primary  font-los-ster text-2xl font-bold"
              to="/"
            >
              Golden Hotel
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-primary focus:text-white"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link
                className="text-primary  font-los-ster text-2xl font-bold"
                to="/"
              >
                Golden Hotel
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/*  Bookings*/}
              <MenuItem label="Bookings" address="/dashboard" icon={FaList} />
              {/*  Hotels*/}
              {role.isAdmin && (
                <MenuItem
                  label="Hotels"
                  address="/dashboard/hotels"
                  icon={LuHotel}
                />
              )}

              {/*  Hotels*/}
              {role.isAdmin && (
                <MenuItem
                  label="Rooms"
                  address="/dashboard/rooms"
                  icon={MdOutlineKingBed}
                />
              )}

              {/*  Hotels*/}
              {role.isAdmin && (
                <MenuItem
                  label="Reports"
                  address="/dashboard/reports"
                  icon={BsGraphUpArrow}
                />
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary hover:text-white ${
                isActive ? "bg-primary  text-white" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-primary   hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
