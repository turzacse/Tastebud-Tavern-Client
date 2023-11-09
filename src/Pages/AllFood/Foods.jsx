import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Foods = ({ food }) => {
    console.log(food);
    const {_id} = food;
    const {user} = useContext(AuthContext);
    //console.log('here: ',user.email, food.email);
    return (
        <div>
            <div className="card card-compact  shadow-xl">
                <figure><img className="h-[200px] w-full rounded-2xl shadow-2xl" src={food.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food.foodName}</h2>
                    <h2 className=" py-2 font-bold text-xl capitalize border-none">{food.foodCategory}</h2>
                    <div className="flex justify-between mr-10">
                        <h2 className="text-lg"><span className=" font-bold">Available Quantity</span> {food.quantity}</h2>
                        <h2 className="text-xl"><span className="font-bold">Price:</span> ${food.price}</h2>
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