import fond from "../assets/waves.svg";
import imageBanner from "../assets/computer.svg";
import imageBack from "../assets/sun_tornado.svg";
import { NavLink } from "react-router-dom";
import { ScrollToSection } from "./ScrollToSection";

export function Banner() {
  // Variable con URL de la imagen
  const backgroundImage = `url(${imageBack})`;

  return (
    <section className="relative">
      <div className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-gray-500 p-4 h-full py-10"
        style={{ backgroundImage }}
      >
        <div className="lg:grid-cols-3 lg:gap-4 lg:grid">
          <div className="md:col-span-2 px-4 mx-auto max-w-screen-xl text-center py-36 md:py-40 lg:py-48">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white lg:text-4xl">
              Seminario de Solución de Problemas de Uso, Adaptación y Explotación de Sistemas Operativos
            </h1>
            <p className="mb-6 text-lg font-medium text-gray-500 lg:text-xl sm:px-6 xl:px-48 dark:text-gray-400">
              Portafolio de evidencias
            </p>

            <div className="flex items-center justify-center gap-x-4">
              <button
                onClick={() => ScrollToSection("descripcion")}
                className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Información
              </button>
              <NavLink
                to="/actividades"
                className="py-2.5 px-3.5 text-sm font-medium text-center rounded-lg border text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              >
                Actividades <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={imageBanner} className="h-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20">
        <img src={fond} alt="Onda" className="w-full h-full rotate-180" />
      </div>
    </section>
  );
}
