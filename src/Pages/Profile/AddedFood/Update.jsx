import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const {id} = useParams();
    const [food, setFood] = useState(null);
    const [load, setLoad] = useState(true);

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
    //console.log(food);
    const {_id,foodName, foodCategory, quantity, origin, description, price} = food || [];

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const foodName =form.name.value;
        const foodCategory = form.category.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const price = form.price.value;

        const updateFood = {foodName, foodCategory, quantity, origin, description, price};

        console.log(updateFood);

        fetch(`https://b8a11-server-side-turzacse.vercel.app/allfoods/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="my-10">
            {
                food? (
                    <form onSubmit={handleUpdate} className="card-body w-1/2 mx-auto bg-white shadow-2xl rounded-xl">
                <h1 className='text-center text-3xl font-bold'>Update a Food Item</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Food name" className="input input-bordered" defaultValue={foodName} required />
                </div>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <input name='category' type="text" placeholder="Food category" defaultValue={foodCategory} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' type="number" placeholder="Quantity" defaultValue={quantity} className="input input-bordered" required />
                    </div>
                </div>

                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Origin(Country)</span>
                        </label>
                        <input name='origin' type="text" placeholder="Food Origin" defaultValue={origin} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="price" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Food Description" defaultValue={description} className="input input-bordered" required />
                </div>

                <input className="btn btn-primary my-4 capitalize" type="submit" value="Update Info" />
            </form>
                ) :
                (
                    <p>loading....</p>
                )
            }
        </div>
    );
};

export default Update;