import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Meta from "../Shared/Meta";

const Order = () => {
    const {id} = useParams();
    const [order, setOrder] = useState([]);
    const [load, setLoad] = useState(true);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch('https://b8a11-server-side-turzacse.vercel.app/allfoods')
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
    //console.log(user);

    const logger = useLoaderData();
    //console.log(logger);
    // const foundUserEmail = logger.find((userEmail) => userEmail.email === user.email);
    // console.log(foundUserEmail);

    const foundUserEmail = logger ? logger.find((userEmail) => userEmail.email === user.email) : null;

    const buyerName = user && user.name ? user.name : foundUserEmail && foundUserEmail.name ? foundUserEmail.name : '';
    const buyerEmail = user && user.email ? user.email : foundUserEmail && foundUserEmail.email ? foundUserEmail.email : '';

    const handleOrder = e =>{
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const price = form.price.value;
        const date = form.date.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const orderInfo = {foodName, price, date, quantity, buyerName, buyerEmail};
        console.log(orderInfo);

        fetch('https://b8a11-server-side-turzacse.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            res.json();
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Order Purcheced",
              });
        })
        .catch(error => console.log(error))
    }
    return (
        <>
        <Meta title={"order"}></Meta>
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
                        <input defaultValue={order.price} name='price' readOnly type="text" placeholder="Food price" className="input input-bordered" required />
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
                        <input name='buyerName' type="text" placeholder="User Name" defaultValue={buyerName} readOnly  className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <input name='buyerEmail' type="text" placeholder="User Email" defaultValue={buyerEmail} readOnly className="input input-bordered" required />
                    </div>
                </div>

                <input className="btn bg-[#FF3811] border-none text-white font-semibold my-4" type="submit" value="Purches Food"/>
            </form>
        </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
        </>
    );
};

export default Order;