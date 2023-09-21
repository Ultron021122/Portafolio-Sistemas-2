export function Banner() {
  const backgroundImage = 'url("../src/assets/banner.jpg")'; // Ruta a tu imagen

  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-gray-500 p-4 h-full"
      style={{ backgroundImage }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-36 md:py-40 lg:py-52">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-5xl">
          Seminario de Uso, Adaptación y Explotación de Sistemas Operativos
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 xl:px-48 dark:text-gray-400">
          Sección D01.
        </p>
      </div>
      {/* <div className="justify-center space-y-0 space-x-4">
        <Link
          to="/unidad"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Actividades
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <a
          href="#clase"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Más sobre la clase
        </a>
      </div> */}
    </section>
  );
}
