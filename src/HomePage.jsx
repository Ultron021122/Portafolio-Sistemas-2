import { Banner } from "./components/Banner";
import { ClassInfo } from "./components/ClassInfo";

export function HomePage() {
  const DataClass = {
    nombre:
      "Seminario de Solución de Problemas de Uso, Adaptación y Explotación de Sistemas Operativos",
    departamento: "Departamento de Ciencias Computacionales",
    section: "Sección D01",
    area: "Básica particular",
    description:
      "Los sistemas operativos administran las diversas tareas y dispositivos conectados al equipo de cómputo (Tablet, computadora o Smartphone). La vision del sistema operativo para los desarrolladores de software es la de una plataforma sobre la cual se crean nuevas aplicaciones para el usuario, por ello el sistema operativo es la base de todo sistema de información. En esta unidad de aprendizaje se entenderá la importancia de los Sistemas Operativos, así como la comprensión de su operación y construcción permitiendo con ello aplicar estrategias de optimización para mejorar su rendimiento, conocerá los diferentes tipos de sistemas operativos, e identificara como está conformado y los servicios que presta.",
    maestro: "Becerra Velázquez Violeta del Roció",
    unidades: ['Unidad temática 1: Instalación de Sistemas Operativos', 'Unidad temática 2: Configuración de Servicios','Unidad temática 3: Optimización'],
  };

  return (
    <div>
      <Banner />
      <ClassInfo
        nombre={DataClass.nombre}
        departamento={DataClass.departamento}
        section={DataClass.section}
        description={DataClass.description}
        area={DataClass.area}
        maestro={DataClass.maestro}
        unidades={DataClass.unidades}
      />
    </div>
  );
}
