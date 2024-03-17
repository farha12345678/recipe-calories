import PropTypes from 'prop-types'

const Table = ({item , handleDelete , handleCooking}) => {
    const {recipe_name , preparing_time , calories , recipe_id} = item;
    
    
    return (
        <div>
            <div>
                <tbody>
                <th>{recipe_id}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <button onClick={() =>{ handleDelete(item.recipe_id) , handleCooking(item)}} className=" bg-green-400 rounded-3xl btn">Preparing</button>
                </tbody>
                
                
            </div>
        </div>
    );
};
Table.propTypes = {
    item : PropTypes.object.isRequired,
    handleDelete : PropTypes.func.isRequired,
    handleCooking : PropTypes.func.isRequired
}

export default Table;