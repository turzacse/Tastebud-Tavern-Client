import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SingleFood = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [load, setLoad] = useState(true);
    const { user } = useContext(AuthContext);
    //console.log('single',user.email, food?.email)

    useEffect(() => {
        fetch('https://b8a11-server-side-turzacse.vercel.app/allfoods')
            .then(res => res.json())
            .then(data => {
                const one = data.find(f => f._id === id);
                setFood(one);
                setLoad(false);
            })
            .catch(error => {
                // Handle any network or fetch errors here
                console.error("Error fetching food data:", error);
            });
    }, [id]);

    return (
        <div>
            {food ? (
                <div>
                    <div className=" bg-base-500">
                        <div className="hero-content flex-col lg:gap-10 md:gap-5 gap-2 lg:flex-row lg:w-3/4 mx-auto">
                            <div className="md:w-1/3">
                                <img src={food.img} className="w-full  rounded-2xl shadow-2xl lg:h-[400px] md:h-[200px]" alt={food.foodName} />
                                <h1 className="bg-sky-300 p-4 rounded-2xl md:mt-10 mt-5 lg:text-3xl text-2xl font-bold">{food.foodName}</h1>
                            </div>
                            <div className="md:w-2/3 w-full card-body bg-sky-200 shadow-2xl rounded-2xl">
                                <h2>Food ctegory: {food.foodCategory}</h2>
                                <h2>Price: ${food.price}</h2>
                                <h2>Made by: {food.addedBy}</h2>
                                <h2>Food Origin: {food.origin}</h2>
                                <p className="py-6">{food.description}</p>
                                {/* <Link to={`/order/${food._id}`} className="btn bg-[#FF3811] border-none capitalize text-white font-semibold">Order Now</Link> */}
                                {
                                    user?.email === food?.email ?
                                        <h2 className="text-red-400">You added the item, can not purches this food</h2>
                                        :
                                        <Link to={`/order/${food._id}`} className="btn bg-[#FF3811] border-none capitalize text-white font-semibold">Order Now</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default SingleFood;
