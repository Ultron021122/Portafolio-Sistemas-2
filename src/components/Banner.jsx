import { ScrollToSection } from "../utilities/scrollToSection";

export function Banner() {
  const backgroundImage = 'url("../src/assets/banner2.jpg")';

  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-gray-500 p-4 h-full"
      style={{ backgroundImage }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-36 md:py-40 lg:py-44">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl">
          Seminario de Uso, Adaptación y Explotación de Sistemas Operativos
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
          <a
            href="#"
            className="py-2.5 px-3.5 text-sm font-medium text-center text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
