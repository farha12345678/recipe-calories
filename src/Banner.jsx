import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-image rounded-3xl">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-white">Discover an exceptional cooking
                            class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding
                            problems to become an exceptionally well world-class Programmer.</p>
                        <div className='flex  ml-10 '>
                        <button className="btn btn-primary mr-16 text-black text-lg font-bold rounded-3xl">Explore Now</button>
                        <button className="border text-white text-lg font-bold rounded-3xl">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
