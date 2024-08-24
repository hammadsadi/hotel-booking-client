import { Link } from "react-router-dom";
import NavItem from "../Shared/NavItem/NavItem";
import userMale from "../../assets/images/user-male.svg";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              Golden Hotel
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <NavItem label="Home" dLink="/" />
                <NavItem label="About" dLink="/about" />
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!user && (
                <Link
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/sign-in"
                >
                  Login
                </Link>
              )}

              {user ? (
                <>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-8 cursor-pointer rounded-full"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  ) : (
                    <img
                      src={userMale}
                      alt=""
                      className="w-8 cursor-pointer"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  )}
                </>
              ) : (
                ""
              )}

              {/*  */}
              {isOpen && user ? (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-2 top-14 text-sm border">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Dashboard
                    </Link>
                    <div
                      onClick={logOut}
                      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
