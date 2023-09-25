export function Info() {
  return (
    <div className="container md:w-11/12 lg:w-3/4 mx-auto p-2 md:p-0">
      <h1 className="pt-10 text-3xl text-center font-extrabold lg:text-4xl">
        Información de Desarrollador
      </h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-4">Datos personales:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-bold">Nombre completo:</p>
            <p>Sebastián Martínez López</p>
          </div>
          <div>
            <p className="text-lg font-bold">Código de estudiante:</p>
            <p>220976438</p>
          </div>
          <div>
            <p className="text-lg font-bold">Carrera:</p>
            <p>Ingeniería Informática</p>
          </div>
          <div>
            <p className="text-lg font-bold">Sección:</p>
            <p>D01</p>
          </div>
          <div>
            <p className="text-lg font-bold">Email:</p>
            <p>sebastian.martinez7643@alumnos.udg.mx</p>
          </div>
        </div>
      </div>
    </div>
  );
}
