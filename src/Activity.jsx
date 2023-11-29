import Conclusion from "./components/Conclusion";
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
            Unidad temática 1:
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
            <hr className="border-t border-gray-200 mt-2" />
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

      {/* Conclusión Unidad 1 */}
      <Conclusion
        textMain="A lo largo de la unidad temática de Seminario de Solución de Problemas de Uso, Adaptación y Explotación de Sistemas Operativos, se ha
        explorado y comprendido en profundidad la arquitectura interna de las computadoras y su interacción fundamental con los sistemas operativos.
        Esta unidad nos ha proporcionado una visión integral de cómo funciona una máquina a nivel de hardware y cómo el sistema operativo desempeña
        un papel crucial en su gestión y funcionamiento."
      >
        Comenzando con la introducción, se destacó la importancia de comprender la estructura y el funcionamiento del hardware, lo que
        permitió apreciar la necesidad de un sistema operativo eficiente para gestionar los recursos y brindar una experiencia de usuario fluida.
        Este conocimiento es esencial en el mundo de la informática, ya que sienta las bases para la comprensión de problemas más complejos
        relacionados con los sistemas operativos.
      </Conclusion>

      {/* Unidad 2 */}
      <section className="container md:w-11/12 lg:w-3/4 mx-auto p-2 md:p-0">
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Unidad temática 2:
            <small className="ml-2 flex justify-center md:inline-block font-semibold text-gray-500">
              Configuración de Servicios
            </small>
          </h2>
        </div>
        <div className="my-6">
          <AccordionBottom title="Objetivo de la unidad temática" id="4">
            El estudiante utiliza lenguajes de programación de alto nivel, para ejecutar
            funciones especificas con procesos o hilos a la solución de problemas propuestos.
          </AccordionBottom>
          <AccordionCenter title="Introducción" id="5">
            Esta unidad temática explica el funcionamiento de los procesos e hilos dentro del
            sistema operativo, asi como su codificación en la resolución de distintos problemas
            de concurrencia y la configuración de servicios.
            <ol className="mt-2">
              <li className="mb-4"> 2. Configuración de servicios
                <ol className="ml-6 md:ml-9 lg:ml-12">
                  <li className="mb-2 mt-2">2.1. Procesos y subprocesos</li>
                  <li className="mb-2">2.2. Procesos ligeros</li>
                  <li className="mb-2">2.3. Aplicaciones y solución de problemas de concurrencia</li>
                </ol>
              </li>
            </ol>
          </AccordionCenter>
          <AccordionTop title="Actividades" id="6">
            <p className="text-center">A continuación se muestras las actividades de aprendizaje realizadas en la unidad.</p>
            <hr className="border-t border-gray-200 mt-2" />
            {/* Enlace actividad 8 */}
            <GridActivities title="Actividad de aprendizaje 8" activity="Conociendo los procesos, subprocesos, hilos y su entorno" date="01-oct-2023">
              <button onClick={() => scrollToElement('Actividad8')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 9 */}
            <GridActivities title="Actividad de aprendizaje 9" activity="Concurrencia, exclusión mutua, sincronización y problemas de control" date="08-oct-2023">
              <button onClick={() => scrollToElement('Actividad9')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 10 */}
            <GridActivities title="Actividad de aprendizaje 10" activity="Exclusión mutua" date="15-oct-2023">
              <button onClick={() => scrollToElement('Actividad10')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 11 */}
            <GridActivities title="Actividad de aprendizaje 11" activity="Productor-Consumidor" date="29-oct-2023">
              <button onClick={() => scrollToElement('Actividad11')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 12 */}
            <GridActivities title="Actividad de aprendizaje 12" activity="Las soluciones al Interbloqueo" date="12-nov-2023">
              <button onClick={() => scrollToElement('Actividad12')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
          </AccordionTop>
        </div>
      </section>
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
      {/* Actividades Unidad 2 */}
      <section className="bg-gray-200">
        <div className="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
          {/* Actividad 8 */}
          <Card identificador="Actividad8" level={4}
            iframe="https://drive.google.com/file/d/1SQDFj1ixG-UiTS2trtoiCqQpSC0qpFlU/preview"
            number="8" subtitle="Conociendo los procesos, subprocesos, hilos y su entorno"
          >
            La actividad se enfoca en explorar los conceptos fundamentales de la gestión de procesos,
            subprocesos e hilos en sistemas operativos.
          </Card>
          {/* Actividad 9 */}
          <Card identificador="Actividad9" level={3}
            iframe="https://drive.google.com/file/d/1opeltzjfkU34NnkGfGkpKz41gGxR3akh/preview"
            number="9" subtitle="Concurrencia, Exclusión mutua, Sincronización y Problemas de control"
          >
            La actividad se centra en la concurrencia. Aborda aspectos como la comunicación de procesos, la compartición de recursos, la
            competencia por dichos recursos, la sincronización de actividades y la asignación de tiempo de
            procesador para algoritmos.
          </Card>
          {/* Actividad 10 */}
          <Card identificador="Actividad10" level={3}
            iframe="https://drive.google.com/file/d/1hHZPCM1uAIHdPdvuOfBvZo13n_MOxSRo/preview"
            number="10" subtitle="Exclusión mutua"
          >
            La actividad se centra en el problema de la exclusión mutua en entornos de concurrencia. Se observan las
            diferentes soluciones para lograr la exclusión mutua, como Monitores, Semáforos, Mutex, Dekker, Peterson y
            Paso de Mensajes.
          </Card>
          {/* Actividad 11 */}
          <Card identificador="Actividad11" level={5}
            iframe="https://drive.google.com/file/d/1a8zfbQJUTObuihEDNKeA2zT1GZgqEjnl/preview"
            number="11" subtitle="Productor-Consumidor"
            button={true} url="https://youtu.be/Dak6UrCaMEU"
          >
            La actividad consiste en abordar el problema del productor-consumidor, destacando su relevancia en el contexto de
            la concurrencia. Comprendiendo la importancia de la exclusión mutua para evitar Interbloqueo e inanición.
          </Card>
          {/* Actividad 12 */}
          <Card identificador="Actividad12" level={5}
            iframe="https://drive.google.com/file/d/1NuOzJghvbXCaXV-kCoqEVYnfzxbVXmia/preview"
            number="12" subtitle="Las soluciones al Interbloqueo (filósofos)"
            button={true} url="https://youtu.be/LcWH309C7xE"
          >
            La actividad consiste en en el Interbloqueo, definido como el bloqueo permanente de procesos que compiten por recursos
            o se comunican entre sí. La actividad se centra en las posibles soluciones por software al problema de los filósofos
            comensales.
          </Card>
        </div>
      </section>

      {/* Conclusión Unidad 2 */}
      <Conclusion
        textMain="A lo largo de las actividades proporcionadas, he explorado una diversidad de conceptos fundamentales en el ámbito de sistemas 
        operativos y concurrencia. Desde la gestión de procesos hasta la solución de problemas clásicos como el de los filósofos comensales, he 
        profundizado en la comprensión de los desafíos inherentes a la concurrencia y he aplicado diversas soluciones utilizando herramientas 
        como semáforos, mutex y otros mecanismos de exclusión mutua."
      >
        Estas tareas no solo han consolidado mi comprensión teórica de conceptos clave, como la sincronización de procesos y la gestión de recursos
        compartidos, sino que también han mejorado mis habilidades prácticas en la implementación de soluciones a través de la programación. La
        resolución de problemas específicos, como el del productor-consumidor, ha fortalecido mi capacidad para abordar desafíos prácticos en
        entornos concurrentes.
      </Conclusion>

      {/* Unidad 3 */}
      <section className="container md:w-11/12 lg:w-3/4 mx-auto p-2 md:p-0">
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Unidad temática 3:
            <small className="ml-2 flex justify-center md:inline-block font-semibold text-gray-500">
              Optimización
            </small>
          </h2>
        </div>
        <div className="my-6">
          <AccordionBottom title="Objetivo de la unidad temática" id="4">
            El estudiante escribe de forma concisa, clara organizada y conveniente diversos algoritmos que optimicen
            el desempeño de diversas tareas que gestiona el Sistema Operativo.
          </AccordionBottom>
          <AccordionCenter title="Introducción" id="5">
            Esta unidad temática explica el funcionamiento de los procesos e hilos dentro del sistema operativo, asi
            como su codificación en la resolución de distintos problemas de concurrencia y la configuración de servicios.
            <ol className="mt-2">
              <li className="mb-4"> 3. Optimización
                <ol className="ml-6 md:ml-9 lg:ml-12">
                  <li className="mb-2 mt-2">3.1. Scripts como parte del proceso</li>
                  <li className="mb-2">3.2. Aplicaciones para la optimización del SO</li>
                </ol>
              </li>
            </ol>
          </AccordionCenter>
          <AccordionTop title="Actividades" id="6">
            <p className="text-center">A continuación se muestras las actividades de aprendizaje realizadas en la unidad.</p>
            <hr className="border-t border-gray-200 mt-2" />
            {/* Enlace actividad 14 */}
            <GridActivities title="Actividad de aprendizaje 14" activity="Scripts para optimizar" date="19-nov-2023">
              <button onClick={() => scrollToElement('Actividad14')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 15 */}
            <GridActivities title="Actividad de aprendizaje 15" activity="Paralelismo" date="26-nov-2023">
              <button onClick={() => scrollToElement('Actividad15')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
            {/* Enlace actividad 16 */}
            <GridActivities title="Actividad de aprendizaje 16" activity="Seguridad" date="30-nov-2023">
              <button onClick={() => scrollToElement('Actividad16')} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Ver actividad
              </button>
            </GridActivities>
          </AccordionTop>
        </div>
      </section>
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
      {/* Actividades Unidad 3 */}
      <section className="bg-gray-200">
        <div className="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
          {/* Actividad 14 */}
          <Card identificador="Actividad14" level={3}
            iframe="https://drive.google.com/file/d/14XPSxpHK63YzAEoUuQh0V2nw3XI1mGuc/preview"
            number="14" subtitle="Scripts para optimizar"
            button={true} url="https://youtu.be/0_shdUte8sU"
          >
            La actividad se enfoca en explorar el tema de scripts para la automatización de tareas al igual que su uso en la optimización
            dentro de sistemas operativos.
          </Card>
          {/* Actividad 15 */}
          <Card identificador="Actividad15" level={3}
            iframe="https://drive.google.com/file/d/15K3YjOsgAbJA93_tXWdD1MogQ0-IMq0C/preview"
            number="15" subtitle="Paralelismo"
          >
            La actividad se centra en el paralelismo esto específicamente mostrándose mediante una herramienta la cual es Intel Parallel
            Studio XE en donde vemos también su enfoque y relación dentro del enfoque de multicore.
          </Card>
          {/* Actividad 16 */}
          <Card identificador="Actividad16" level={3}
            iframe="https://drive.google.com/file/d/1QgJHtJL5AW0us6Czsm9uWD9aZeIONjzO/preview"
            number="16" subtitle="Seguridad"
          >
            La actividad se centra en el tema de seguridad esto dentro de varios enfoques como lo es seguridad dentro de sistemas operativos,
            usuarios y red. Nos ayuda a entender las normas que debemos tomar en cuenta al momento del desarrollo de software para buscar la eficacia.
          </Card>
        </div>
      </section>
      {/* Conclusión Unidad 3 */}
      <Conclusion
        textMain="En esta unidad que fue realmente corta fuimos a la búsqueda de eficiencia,
        mediante la implementación de prácticas seguras y la atención a las amenazas actuales
        todas estas terminando por ser fundamentales para mantener un entorno robusto y
        confiable."
      >
        Un poco a detalle el uso de scripts realmente es algo genial puesto que
        ahorra tiempo y puede llegar a hacer tareas maravillosas. La seguridad me parece que
        es un tema esencial y realmente necesario un tema que no se puede ignorar, en
        conclusión, todos estos temas buscan que se tengan las mejores técnicas de desarrollo
        en caso de sistemas operativos.
      </Conclusion>
    </main>
  );
}
