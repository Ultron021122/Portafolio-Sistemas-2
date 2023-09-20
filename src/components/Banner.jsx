export function Banner() {
  const backgroundImage = 'url("../src/assets/banner.jpg")'; // Ruta a tu imagen

  return (
    <div
      className="bg-banner-image bg-cover bg-center text-black p-4 h-96 flex flex-col"
      style={{ backgroundImage }}
    >
      <div>
        <h1 className="text-3xl font-bold">
          Seminario de Uso, Adaptación y Explotación de Sistemas Operativos
        </h1>
        <p className="mt-2">Sección D01.</p>
      </div>
    </div>
  );
}
