import { useEffect, useState } from "react";


const AllFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <div className="lg:m-20 m-10">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    foods.map(food => <>
                        <div className="card card-compact bg-sky-200 shadow-xl">
                            <figure><img className="h-[200px] w-full rounded-2xl shadow-2xl" src={food.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{food.foodName}</h2>
                                <h2 className="btn bg-orange-400 w-1/3 capitalize border-none text-white">{food.foodCategory}</h2>
                                <div className="flex justify-between mr-10">
                                    <h2 className=""><span>Available Quantity</span> {food.quantity}</h2>
                                    <h2 className="">${food.price}</h2>
                                </div>
                        
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#FF3811] text-white border-none">Details</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default AllFood;