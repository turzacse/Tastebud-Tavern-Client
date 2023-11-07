import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Order = () => {
    const {id} = useParams();
    const [order, setOrder] = useState([]);
    const [load, setLoad] = useState(true);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
            .then(res => res.json())
            .then(data => {
                const one = data.find(f => f._id === id);
                setOrder(one);
                setLoad(false);
            })
            .catch(error => {
                // Handle any network or fetch errors here
                console.error("Error fetching food data:", error);
            });
    }, [id]);
    console.log(user);
    const handleOrder = e =>{

    }
    return (
        <div>
            {order ? (
                <div>
                    <div className='bg-sky-200 py-10'>
            <form onSubmit={handleOrder} className="card-body w-1/2 mx-auto bg-white shadow-2xl rounded-xl">
                <h1 className='text-center text-3xl font-bold'>Purchese The Food</h1>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input defaultValue={order.foodName} name='name' type="text" placeholder="Food name" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={order.price} name='price' type="text" placeholder="Food price" className="input input-bordered" required />
                    </div>
                </div>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name='date' type="date" placeholder="Food category" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' type="number" placeholder="Quantity" className="input input-bordered" required />
                    </div>
                </div>

                {/* <h2 className='font-semibold'>Added by</h2> */}
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Buyer Name</span>
                        </label>
                        <input name='userName' type="text" placeholder="User Name" defaultValue={user.name} readOnly={user.name ? true : false} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <input name='email' type="text" placeholder="User Email" defaultValue={user.email} readOnly={user.email ? true : false} className="input input-bordered" required />
                    </div>
                </div>

                <input className="btn bg-[#FF3811] border-none text-white font-semibold my-4" type="submit" value="Add Food" />
            </form>
        </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Order;