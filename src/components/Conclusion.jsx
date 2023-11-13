import PropTypes from 'prop-types';
import imageBackground from "../assets/fondConclusion.jpg";

function Conclusion({ textMain, children }) {
  // Variable con URL de la imagen
  const backgroundImage = `url(${imageBackground})`;

  return (
    <section className="bg-no-repeat bg-cover bg-center bg-blend-multiply bg-gray-700 h-full p-4"
      style={{ backgroundImage }}
    >
      <div className="container mx-auto md:w-11/12 lg:w-3/4 my-8 sm:my-0 pb-4">
        <h2 className="text-white md:text-center text-2xl font-semibold">
          Unidad temática.
          <small className='ml-2 flex justify-center md:inline-block font-semibold text-gray-100'>
            Conclusión
          </small>
        </h2>
        <p className="text-gray-200 mt-2">
          { textMain }
        </p>
        <p className="text-gray-200 mt-2">
          { children }
        </p>
      </div>
    </section>
  );
}

Conclusion.propTypes = {
  textMain: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Conclusion;
