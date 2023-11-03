import { Conclusion } from "./components/Conclusion";
import AccordionBottom from "./components/AccordionBottom";
import AccordionCenter from "./components/AccordionCenter";
import AccordionTop from "./components/AccordionTop";
import GridActivities from "./components/GridActivities";
import Card from "./components/Card";

export function Activity() {

  const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white pb-4">
      <div className="container md:w-11/12 lg:w-3/4 mx-auto p-2 md:p-0">
        <h1 className="pt-10 text-3xl text-center font-extrabold lg:text-4xl">
          Seminario de Solución de Problemas de Uso, Adaptación y Explotación de
          Sistemas Operativos
        </h1>
        <div className="mt-14">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Unidad temática 1.
            <small className="ml-2 flex justify-center md:inline-block font-semibold text-gray-500">
              Instalación de Sistemas Operativos
            </small>
          </h2>
        </div>
        <div className="my-6">
          <AccordionBottom title="Objetivo de la unidad temática" id="1">
            El estudiante reconoce la arquitectura interna de la máquina y la relación
            con cada parte de esta con el sistema operativo.
          </AccordionBottom>
          <AccordionCenter title="Introducción" id="2">
            Esta unidad temática describe la estructura y funcionamiento de una 
            máquina a nivel de hardware exponiendo la necesidad de la gestión de
            un sistema operativo. Involucra aspectos importantes de estructura y diseño
            de sistemas operativos para su adaptación en el hardware.
            <ol className="mt-2">
              <li className="mb-4">1. Instalación de sistemas operativos
                <ol className="ml-6 md:ml-9 lg:ml-12">
                  <li className="mb-2 mt-2">1.1. Instalación básica y tipos de sistemas operativos</li>
                  <li className="mb-2">1.2. Configuración de dispositivos</li>
                  <li className="mb-2">1.3. Máquina virtual</li>
                  <li className="mb-2">1.4. Partición del disco duro</li>
                  <li className="mb-2">1.5. Distribuciones y licencia</li>
                </ol>
              </li>
            </ol>
          </AccordionCenter>
          <AccordionTop title="Actividades" id="3">
            <p className="text-center">A continuación se muestras las actividades de aprendizajes realizadas en la unidad.</p>
            <hr className="border-t border-gray-700 mt-2"/>
            {/* Enlace actividad 1 */}
            <GridActivities title="Actividad de aprendizaje 1" activity="El hardware de la computadora y el sistema operativo" date="27-ago-2023">
              <button onClick={() => scrollToElement('Actividad1')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 2 */}
            <GridActivities title="Actividad de aprendizaje 2" activity="Sistemas operativos y sus tipos" date="27-ago-2023">
              <button onClick={() => scrollToElement('Actividad2')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 3 */}
            <GridActivities title="Actividad de aprendizaje 3" activity="Configuración de dispositivos" date="03-sep-2023">
              <button onClick={() => scrollToElement('Actividad3')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 4 */}
            <GridActivities title="Actividad de aprendizaje 4" activity="Dispositivos Físicos (equipo)" date="10-sep-2023">
              <button onClick={() => scrollToElement('Actividad4')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 5 */}
            <GridActivities title="Actividad de aprendizaje 5" activity="Concepto de máquina virtual y partición del disco" date="17-sep-2023">
              <button onClick={() => scrollToElement('Actividad5')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 6 */}
            <GridActivities title="Actividad de aprendizaje 6" activity="Distribuciones y licencias de un sistema operativo" date="24-sep-2023">
              <button onClick={() => scrollToElement('Actividad6')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
          </AccordionTop>
        </div>
      </div>
      {/* División */}
      <section>
        <div className="w-full h-auto bg-gray-200">
          <svg className="w-full h-16 sm:h-24 md:h-32 lg:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
               preserveAspectRatio="none">
            <path className="my-svg" fill="white" fillOpacity="1"
              d="M0,224L34.3,202.7C68.6,181,137,139,206,154.7C274.3,171,343,245,411,245.3C480,245,549,171,617,122.7C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,165.3C1097.1,192,1166,192,1234,197.3C1302.9,203,1371,213,1406,218.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
          </svg>
        </div>
      </section>
      {/* Actividades Unidad 1 */}
      <section className="bg-gray-200">
        <div className="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
          {/* Actividad 1 */}
          <Card identificador="Actividad1" level={3}
                iframe="https://drive.google.com/file/d/11FpaM_WDJSrN_00OG6CKt75fPZz3QNT8/preview"
                number="1" subtitle="El hardware de la computadora y el sistema operativo"
          >
            La actividad consiste en comprender los sucesos que ocurren
            mientras que se enciende nuestra máquina de manera que
            identifiquemos los procesos desde el hardware hasta el software.
          </Card>
          {/* Actividad 2 */}
          <Card identificador="Actividad2" level={3}
                iframe="https://drive.google.com/file/d/1w9anxRTdRGbzmkQmF86w9f7SpnSe_hXI/preview"
                number="2" subtitle="Sistemas operativos y sus tipos"
          >
            La actividad consiste en investigar sobre los diversos sistemas
            operativos y distribuciones donde comprenderíamos los conceptos y
            funcionalidades que nos ofrecen para generar un concepto
            comparativo.
          </Card>
          {/* Actividad 3 */}
          <Card identificador="Actividad3" level={4}
                iframe="https://drive.google.com/file/d/1d13ntOZK06YSEip3GqJlFV7C9QHOIFfX/preview"
                number="3" subtitle="Configuración de dispositivos"
          >
              La actividad consiste en generar una USB Booteable para ello se
              comprendió su funcionalidad y posteriormente se generó una USB
              Booteable con el sistema de nuestra preferencia.
          </Card>
          {/* Actividad 4 */}
          <Card identificador="Actividad4" level={4}
                iframe="https://drive.google.com/file/d/1KIkVuAXNtftonWhAcMlruzdVz5R6LwQR/preview"
                number="4" subtitle="Dispositivos Físicos (equipo)"
          >
            La actividad se desarrolló en equipo en donde se realizó la
            búsqueda y investigación de Dispositivos físicos que se pueden
            colocar en nuestro equipo de cómputo.
          </Card>
          {/* Actividad 5 */}
          <Card identificador="Actividad5" level={5}
                iframe="https://drive.google.com/file/d/1s7pSVU_BGag_WhGngUa9HLpSOH2KNoBe/preview"
                number="5" subtitle="Concepto de máquina virtual y partición del disco"
                button={true} url="https://youtu.be/Lf-wd-6N-dk"
          >
            La actividad consiste en investigar conceptos enfocados al tema de
            máquinas virtuales y posterior desarrollar la instalación de tres
            sistemas operativos en una máquina virtual.
          </Card>
          {/* Actividad 6 */}
          <Card identificador="Actividad6" level={3}
                iframe="https://drive.google.com/file/d/1hQXIh01QeQ7EtPWHQwTwmXsy4Iofipi0/preview"
                number="6" subtitle="Distribuciones y licencias de un sistema operativo"
          >
            La actividad consiste en investigar los conceptos de
            distribuciones y licencias de un sistema operativo, explorar todas
            estas y incluir las implicaciones legales.
          </Card>
        </div>
      </section>
      {/* Conclusión */}
      <Conclusion />
    </main>
  );
}
