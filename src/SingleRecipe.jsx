import PropTypes from 'prop-types'
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

const SingleRecipe = ( {item , handleRecipe} ) => {
    console.log(item);
     const {recipe_image ,recipe_name , description , ingredients , preparing_time ,calories} = item;
    return (

       <div>
           
            <div className="card card-compact w-96 border bg-base-100 shadow-xl  ">
                <figure><img className="h-60 w-80 rounded-2xl mt-5" src={recipe_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-extrabold">{recipe_name}</h2>
                    <p className='text-lg font-normal text-black'>{description}</p>
                    <hr />
                    <h4 className='text-xl font-extrabold'>Ingredients :<span>6</span></h4>
                   <ul className='text-base font-normal ml-5'>
                    {
                        ingredients.map((item,index) => <li key={index}>{item}</li>)
                    }
                   </ul>
                    <hr />
                    <div className='flex justify-between mx-10'>
                        <div className='flex'>
                        <IoMdTime className='mr-2 text-lg'></IoMdTime>
                        <p>{preparing_time}</p>
                        </div>
                        <div className='flex'>
                        <PiFireSimpleFill className='mr-2 text-lg'></PiFireSimpleFill>
                        <p>{calories}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start mt-5 ">
                        <button onClick={() => handleRecipe(item)} className="btn  bg-green-400">Want to cook</button>
                    </div>
                </div>

            
            </div>
            </div>
            );
};
SingleRecipe.propTypes = {
    item : PropTypes.array.isRequired,
    handleRecipe : PropTypes.func.isRequired
}

export default SingleRecipe;