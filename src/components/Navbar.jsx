import { NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";
import { useState } from "react";

export function Navbar() {
  // Definición del estado
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-gray-300 text-xl font-bold hover:text-gray-800 flex items-center"
          >
            <img className="h-8 mr-3" src={Logo} alt="Imagen del Logo de React" />
            <h1 className="text-gray-300 text-2xl font-semibold">Portafolio</h1>
          </NavLink>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 text-xl hover:text-white"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="block lg:inline-block text-gray-300 hover:text-white"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/unidad"
              className="block lg:inline-block text-gray-300 hover:text-white"
            >
              Unidad
            </NavLink>
            <NavLink
              to="/desarrollador"
              className="block lg:inline-block text-gray-300 hover:text-white"
            >
              Desarrollador
            </NavLink>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul>
              <li className="block mt-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700">
                <NavLink
                  to="/"
                  className="block font-medium lg:inline-block text-gray-300 hover:text-white"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700">
                <NavLink
                  to="/unidad"
                  className="block font-medium lg:inline-block text-gray-300 hover:text-white"
                >
                  Unidad
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700">
                <NavLink
                  to="/desarrollador"
                  className="block font-medium lg:inline-block text-gray-300 hover:text-white"
                >
                  Desarrollador
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
