export function Banner() {
  const backgroundImage = 'url("../src/assets/banner2.jpg")'; // Ruta a tu imagen

  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-gray-500 p-4 h-full"
      style={{ backgroundImage }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-36 md:py-40 lg:py-52">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-5xl">
          Seminario de Uso, Adaptación y Explotación de Sistemas Operativos
        </h1>
        <p className="mb-6 text-lg font-medium text-gray-500 lg:text-xl sm:px-6 xl:px-48 dark:text-gray-400">
          Sección D01.
        </p>
      </div>
    </section>
  );
}
