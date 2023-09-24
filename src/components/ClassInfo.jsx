import PropTypes from "prop-types";
import { useState } from "react";

function TextMax({ texto, longitudMaxima }) {
  const [mostrarCompleto, setMostrarCompleto] = useState(true);

  const textoRecortado = mostrarCompleto
    ? texto
    : texto.slice(0, longitudMaxima);

  const toggleMostrarCompleto = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  // Establece un estilo personalizado para el párrafo con desvanecimiento
  const estiloTexto = {
    lineHeight: "1.5",
  };

  return (
    <div>
      <p
        className="mt-6 text-base leading-7 text-gray-600 text-left lg:text-justify"
        style={estiloTexto}
      >
        {textoRecortado}
        {texto.length > longitudMaxima && (
          <button
            className="ml-1 text-blue-500 hover:underline"
            onClick={toggleMostrarCompleto}
          >
            {mostrarCompleto ? "Ver menos" : "Ver más"}
          </button>
        )}
      </p>
    </div>
  );
}
TextMax.propTypes = {
  texto: PropTypes.string.isRequired,
  longitudMaxima: PropTypes.number.isRequired,
};

export function ClassInfo({
  nombre,
  departamento,
  section,
  description,
  area,
  maestro,
  unidades,
}) {
  return (
    <main className="bg-white py-20 sm:py-24" id="descripcion">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Información
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {nombre}
          </p>
          <TextMax texto={description} longitudMaxima={298} />
        </div>
      </div>
      <div className="mt-6 mx-auto lg:w-2/3 px-6 lg:px-8 border-t border-gray-100">
        <dl className="divide-y divide-gray-300">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Departamento
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {departamento}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Unidades temáticas
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {unidades.map((unidad, index) => (
                  <p key={index}>
                      { unidad }
                  </p>
                ))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Profesor(a)
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {maestro}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Area de formación
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {area}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">
              Sección
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {section}
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
ClassInfo.propTypes = {
  nombre: PropTypes.string.isRequired,
  departamento: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  maestro: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  unidades: PropTypes.array.isRequired,
};
