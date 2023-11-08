import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleFood = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
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
                        <div className="hero-content flex-col gap-10 lg:flex-row w-3/4 mx-auto">
                            <div className=" h-[400px] w-1/3">
                            <img src={food.img} className="w-full  rounded-2xl shadow-2xl" alt={food.foodName} />
                            <h1 className="bg-sky-300 p-4 rounded-2xl mt-10 text-3xl font-bold">{food.foodName}</h1>
                            </div>
                            <div className="w-2/3 card-body bg-sky-200 shadow-2xl rounded-2xl">
                                <h2>Food ctegory: {food.foodCategory}</h2>
                                <h2>Price: {food.price}</h2>
                                <h2>Made by: {food.addedBy}</h2>
                                <h2>Food Origin: {food.origin}</h2>
                                <p className="py-6">{food.description}</p>
                                <Link to={`/order/${food._id}`} className="btn bg-[#FF3811] border-none capitalize text-white font-semibold">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default SingleFood;
