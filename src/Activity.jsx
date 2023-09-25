import { Conclusion } from "./components/Conclusion";

export function Activity() {
  return (
    <main className="bg-white pb-4">
      <div className="container md:w-11/12 lg:w-3/4 mx-auto p-2 md:p-0">
        <h1 className="pt-10 text-3xl text-center font-extrabold lg:text-4xl">
          Seminario de Solución de Problemas de Uso, Adaptación y Explotación de
          Sistemas Operativos
        </h1>
        <div className="mt-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Unidad temática 1.
            <small className="ml-2 flex justify-center md:inline-block font-semibold text-gray-500">
              Instalación de Sistemas Operativos
            </small>
          </h2>
        </div>
        <div className="mt-6">
          <h3 className="text-xl md:text-2xl font-bold">
            Objetivo de la unidad temática:
          </h3>
          <p className="text-base text-gray-600">
            El estudiante reconoce la arquitectura interna de la máquina y la
            relación con cada parte de esta con el sistema operativo.
          </p>
          <h3 className="text-xl md:text-2xl font-bold mt-2">Introducción:</h3>
          <p className="text-base text-gray-600">
            Esta unidad temática describe la estructura y funcionamiento de una
            maquina a nivel de hardware exponiendo la necesidad de la gestión de
            un sistema operativo. Involucra aspectos importantes de estructura y
            diseño de sistemas operativos para su adaptación en el hardware.
          </p>
        </div>
      </div>
      <div className="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
        {/* Actividad 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/11FpaM_WDJSrN_00OG6CKt75fPZz3QNT8/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 1
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              El hardware de la computadora y el sistema operativo
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 3
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad consiste en comprender los sucesos que ocurren
              mientras que se enciende nuestra máquina de manera que
              identifiquemos los procesos desde el hardware hasta el software.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block">
              <slot name="button" />
            </div>
          </div>
        </div>
        {/* Actividad 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/1w9anxRTdRGbzmkQmF86w9f7SpnSe_hXI/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 2
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              Sistemas operativos y sus tipos
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 3
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad consiste en investigar sobre los diversos sistemas
              operativos y distribuciones donde comprenderíamos los conceptos y
              funcionalidades que nos ofrecen para generar un concepto
              comparativo.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block">
              <slot name="button" />
            </div>
          </div>
        </div>
        {/* Actividad 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/1d13ntOZK06YSEip3GqJlFV7C9QHOIFfX/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 3
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              Configuración de dispositivos
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 4
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad consiste en generar una USB Booteable para ello se
              comprendió su funcionalidad y posteriormente se generó una USB
              Booteable con el sistema de nuestra preferencia.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block">
              <slot name="button" />
            </div>
          </div>
        </div>
        {/* Actividad 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/1KIkVuAXNtftonWhAcMlruzdVz5R6LwQR/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 4
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              Dispositivos Físicos (equipo)
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 4
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad se desarrolló en equipo en donde se realizó la
              búsqueda y investigación de Dispositivos físicos que se pueden
              colocar en nuestro equipo de cómputo.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block"></div>
          </div>
        </div>
        {/* Actividad 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/1s7pSVU_BGag_WhGngUa9HLpSOH2KNoBe/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 5
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              Concepto de máquina virtual y partición del disco
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 5
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad consiste en investigar conceptos enfocados al tema de
              máquinas virtuales y posterior desarrollar la instalación de tres
              sistemas operativos en una máquina virtual.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block">
              <a
                href="https://youtu.be/Lf-wd-6N-dk"
                target="_black"
                className="w-full text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
              >
                Ver reproducción
              </a>
            </div>
          </div>
        </div>
        {/* Actividad 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
          <div className="py-2 h-96 mx-2 xl:mx-10">
            <iframe
              src="https://drive.google.com/file/d/1hQXIh01QeQ7EtPWHQwTwmXsy4Iofipi0/preview"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4 my-auto text-center md:text-left">
            <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Actividad de Aprendizaje 6
            </h3>
            <h4 className="text-base font-semibold text-gray-900">
              Distribuciones y licencias de un sistema operativo
            </h4>
            <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Dificultad: 3
              </span>
            </div>
            <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
              La actividad consiste en investigar los conceptos de
              distribuciones y licencias de un sistema operativo, explorar todas
              estas y incluir las implicaciones legales.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center md:block">
              <slot name="button" />
            </div>
          </div>
        </div>
      </div>
      {/* Conclusión */}
      <Conclusion />
    </main>
  );
}
