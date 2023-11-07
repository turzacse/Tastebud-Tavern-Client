import { Link } from "react-router-dom";

const Foods = ({ food }) => {
    console.log(food);
    const {_id} = food;
    return (
        <div>
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
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-[#FF3811] text-white border-none">Details</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Foods;