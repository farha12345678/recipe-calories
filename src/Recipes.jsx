import { useEffect, useState } from "react";

import Table from "./Table";
import SingleCooking from "./SingleCooking";
import { ToastContainer, toast } from 'react-toastify';
import SingleRecipe from "./SingleRecipe";
import 'react-toastify/dist/ReactToastify.css';




const Recipes = () => {
    const [products, setProducts] = useState([])
    const [prepare, setPrepare] = useState([])


    // currently cook

   const [ cooking , setCooking] = useState([])
    
const handleCooking = (cook) => {
    const newCook = [...cooking , cook]
    setCooking(newCook)
}

   




    const handleRecipe = (recipe) => {

        const isExist = prepare.find((cartItem) => cartItem == recipe);
        console.log(products);
        if (!isExist) {
            
            setPrepare([...prepare, recipe])
        }
        else {
            toast.warn("Already in process");
        }
    }

    const handleDelete = (recipe_id) => {
        const newCart = prepare.filter(item => item.recipe_id != recipe_id);
        setPrepare(newCart)
       
    }


    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="text-center my-20">
                <h1 className="text-4xl font-bold mb-4">Our Recipes</h1>
                <p className="text-xl font-normal">Recipes offer culinary journeys, blending flavors and traditions into delectable creations. <br /> From cherished family secrets to global sensations, they weave stories through ingredients and techniques.</p>
            </div>
            <div className="main-container flex">
                <div className="recipe-container w-2/3 grid grid-cols-2 gap-y-10 pl-10">
                    {
                        products.map((pd , index )=> <SingleRecipe handleRecipe={handleRecipe} key={index} item={pd} ></SingleRecipe>)
                    }
                </div>
                <div className="preparing w-1/3 border border-gray-300 mr-5">
                    <div className="text-2xl font-semibold text-center">
                        <h1>Want to cook :{prepare.length} </h1>
                        <hr />
                    </div>
                    {/* table */}
                    <div>
                        <div className="overflow-x-auto">


                            <thead className="table">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <table className="table">
                                {
                                    prepare.map((item) => <Table key={item.recipe_id} handleDelete={handleDelete} handleCooking = {handleCooking} item={item}></Table>)
                                }
                            </table>
                        </div>

                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-center">Currently cooking:{cooking.length} </h1>
                        <hr />
                    </div> 
                    <thead className="table">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                    <table className="table">
                        {
                        cooking.map((cook ,index) => <SingleCooking key={index}  handleCooking ={handleCooking} cook={cook} ></SingleCooking>)
                        }
                    
                    </table>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
}


export default Recipes;