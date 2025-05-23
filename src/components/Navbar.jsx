import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-8 px-10 flex justify-between md:items-center">
      <div className="flex items-center space-x-2">
        <p className="text-2xl text-gray-600">
          Market<span className="text-gray-600 font-bold">Sync</span>
        </p>
      </div>
      {/*Menu Large */}
      <div className="hidden md:block">
        <ul className="flex flex-row space-x-6 text-gray-700 font-medium h-auto">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? `bg-purple-300 p-2 rounded w-20 text-center`
                  : "hover:bg-purple-300  hover:rounded w-20 text-center p-2 hover:text-white transition"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculos"
              className={({ isActive }) =>
                isActive
                  ? `bg-purple-300 p-2 rounded w-20 text-center`
                  : "hover:bg-purple-300  hover:rounded w-20 text-center p-2 hover:text-white transition"
              }
            >
              Calculos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:bg-purple-300  hover:rounded w-20 text-center p-2 hover:text-white transition"
              onClick={logout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      {/*Menu Small */}
      <div className="block md:hidden relative">
        <div className="flex flex-col items-end gap-2">
          <button
            className="bg-purple-600 p-2 w-10 h-10 rounded cursor-pointer flex items-center justify-cente"
            onClick={toggleMenu}
          >
            <IoMenu className="bg-purple-600 w-full" />
          </button>
          {isOpen && (
            <ul className="absolute right-0 top-full shadow-lg z-50 text-gray-700 font-medium">
              <li className="w-full">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `block bg-purple-600 text-white p-2 w-full text-end`
                      : "block bg-purple-300 hover:bg-purple-600 p-2 hover:text-white transition"
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/calculos"
                  className={({ isActive }) =>
                    isActive
                      ? `block bg-purple-600 text-end p-2 text-white`
                      : "block bg-purple-300 hover:bg-purple-600 p-2 hover:text-white text-end transition"
                  }
                >
                  Calculos
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/"
                  className="block bg-purple-300 hover:bg-purple-600 p-2 hover:rounded w-20 text-end hover:text-white transition"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
