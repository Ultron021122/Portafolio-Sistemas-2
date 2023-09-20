import { NavLink } from "react-router-dom";
import Logo from '../assets/react.svg';

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-gray-300 text-xl font-bold hover:text-gray-800">
          <img src={Logo} alt="Imagen del Logo de React"></img>
        </NavLink>
        <div>
          <NavLink to="/" className="text-gray-300 mr-4 hover:text-white">
            Inicio
          </NavLink>
          <NavLink to="/unidad" className="text-gray-300 mr-4 hover:text-white">
            Unidad
          </NavLink>
          <NavLink to="/desarrollador" className="text-gray-300  hover:text-white">
            Desarrollador
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
