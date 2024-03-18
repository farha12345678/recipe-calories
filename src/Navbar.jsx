import { FaUserCircle } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (

    <div className="navbar bg-base-100 ">
      <div className="navbar-start ml-10">

        <h1 className="text-4xl font-extrabold">Recipe Calories</h1>
      </div>
      <div className="navbar-center  hidden lg:flex mr-40">
        <ul className="menu menu-horizontal">
          <li><a>Home</a></li>
          <li><a>Recipes</a></li>
          <li><a>About</a></li>
          <li><a>Search</a></li>




        </ul>
      </div>
      <div className='flex mr-20'>
        <div className='flex'>
          <CiSearch className='text-3xl'></CiSearch>
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto " />
        </div>
        <div >
          <FaUserCircle className='text-3xl text-green-400 ml-5'></FaUserCircle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;