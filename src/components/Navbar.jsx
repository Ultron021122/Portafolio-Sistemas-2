import { NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-gray-300 text-xl font-bold hover:text-gray-800 flex items-center"
          >
            <img className="mr-2" src={Logo} alt="Imagen del Logo de React" />
            <h1 className="text-gray-300 text-xl font-bold">Portafolio de Evidencias</h1>
          </NavLink>
          <div className="lg:hidden">
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
          <div className="hidden lg:flex items-center space-x-8">
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
          <div className="lg:hidden mt-2">
            <ul className="text-gray-300">
              <li className="hover:text-white">
                <NavLink
                  to="/"
                  className="block lg:inline-block text-gray-300 hover:text-white mt-4 "
                >
                  Inicio
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink
                  to="/unidad"
                  className="block lg:inline-block text-gray-300 hover:text-white"
                >
                  Unidad
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink
                  to="/desarrollador"
                  className="block lg:inline-block text-gray-300 hover:text-white"
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

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">

//         <div className="lg:hidden">
//           <button
//             onClick={toggleNavbar}
//             className="text-gray-300 text-xl hover:text-white"
//           >
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
//           <NavLink
//             to="/"
//             className="block lg:inline-block text-gray-300 hover:text-white mr-4"
//           >
//             Inicio
//           </NavLink>

//         </div>
//       </div>
//     </nav>
//   );
// }
