import PropTypes from 'prop-types';

function GridActivities({title, activity, date, children}) {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center items-center text-center my-4">
                <div>
                    <p>{title}</p>
                    <p>{activity}</p>
                </div>
                <div>
                    <p className="mt-4 sm:mt-0">
                        {date}
                    </p>
                </div>
                <div className="mt-3 sm:mt-0 md:pb-0 w-5/6 md:w-auto sm:col-span-2 md:col-span-1">
                    {children}
                </div>
            </div>
            <hr className="border-t border-gray-200" />
        </div>
    );
}

GridActivities.propTypes = {
    title: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default GridActivities;