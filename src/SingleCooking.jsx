
import PropTypes from 'prop-types';

const SingleCooking =({cook}) => {
    

    return (
        <div>
            <div>
                <tbody>
                <th>{cook.recipe_id}</th>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time}</td>
                <td>{cook.calories}</td>
                </tbody>
                
                
            </div>
        </div>
    );
};

SingleCooking.propTypes = {
    cook : PropTypes.object.isRequired
};

export default SingleCooking;