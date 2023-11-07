import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddAFood = () => {

    const {user, loading} = useContext(AuthContext);
    console.log(user.email);
    
    const [users, setUsers] = useState([]);

     useEffect( ()=>{
         fetch('http://localhost:5000/users')
        .then(res =>res.json())
        .then(data => {
            const foundUser = data.find(u => u.email === user.email);
            if(foundUser){
                setUsers(foundUser);
            }
        })
    } ,[])
    console.log(users);

    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const img = form.photo.value;
        const foodCategory = form.category.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const price = form.price.value;
        const addedBy = form.userName.value;
        const email = form.email.value;
        const description = form.description.value;

        console.log(foodName, foodCategory,img, quantity, origin, price, addedBy, email, description);
        const food = {foodName, foodCategory,img, quantity, origin, price, addedBy, email, description};

        fetch('http://localhost:5000/allfoods', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(food)
        })
        .then(res => res.json())
        .catch(error => console.log(error))

    };

    return (
        <div className='bg-sky-200 py-10'>
            <form onSubmit={handleAddItem} className="card-body w-1/2 mx-auto bg-white shadow-2xl rounded-xl">
                <h1 className='text-center text-3xl font-bold'>Add a Food Item</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Food name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <input name='category' type="text" placeholder="Food category" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' type="number" placeholder="Quantity" className="input input-bordered" required />
                    </div>
                </div>

                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Origin(Country)</span>
                        </label>
                        <input name='origin' type="text" placeholder="Food Origin" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                    </div>
                </div>

                <h2 className='font-semibold'>Added by</h2>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input name='userName' type="text" placeholder="User Name" defaultValue={users.name} readOnly={users.name ? true : false} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input name='email' type="text" placeholder="User Email" defaultValue={users.email} readOnly={users.email ? true : false} className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Food Description" className="input input-bordered" required />
                </div>

                <input className="btn btn-primary my-4" type="submit" value="Add Food" />
            </form>
        </div>
    );
};

export default AddAFood;