import PropTypes from 'prop-types';
import Iframe from 'react-iframe'

function Card({identificador, iframe, number, subtitle, level, children, url, button = false}) {
    
    const repeatedStarts = [];
    for (let i = 0; i < level; i++) {
        repeatedStarts.push(
            <svg key={`${i}${identificador}`}
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>{i+1}</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>  
        );
    }
    
    return (
    <div className="mb-4" id={identificador}>
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100">
            <div className="py-2 h-96 mx-2 xl:mx-10">
                <Iframe url={iframe}
                className="object-cover w-full h-full rounded-lg"
                loading='lazy'/>
            </div>
            <div className="p-4 my-auto text-center md:text-left">
                <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                    Actividad de Aprendizaje {number}</h3>
                <h4 className="text-base font-semibold text-gray-900">
                    {subtitle}
                </h4>
                <div className="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                    {repeatedStarts}
                    <span
                        className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                        Dificultad: {level}
                    </span>
                </div>
                <p className="pr-0 md:pr-2 text-center md:text-left text-gray-700">
                    {children}
                </p>
                <div className="pt-2 md:pt-4 flex justify-center md:block">
                    { button &&  (<a href={url} target="_black"
                    className="w-full text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                     font-medium rounded-lg text-base px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
                    >
                    Ver reproducción
                    </a>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
}

Card.propTypes = {
    identificador: PropTypes.string.isRequired,
    iframe: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    button: PropTypes.bool,
    children: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Card;