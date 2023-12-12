import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GrDocumentUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Meta from '../../Shared/Meta';

const AddedFood = () => {
    const [foods, setFoods] = useState([]);
    const [added, setAdded] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch('https://b8a11-server-side-turzacse.vercel.app/allfoods')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
                const filteredOrders = data.filter((item) => item.email === user.email);
            setAdded(filteredOrders);
        })
    },[user.email]);

    const handleUpdate = _id =>{
        console.log(_id);
    }

    //console.log(foods, added, user.email);
    return (
        <>
        <Meta title={"added food"}></Meta>
        <div>
            <div className="lg:mx-20 md:mx-10 mx-4 my-20 bg-sky-300 rounded-2xl">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-green-400 h-14">
                        <tr className="text-xl">
                            <th>Name</th>
                            <th>Quantit</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            added ?.map(x => <tr key={x._id}>
                                
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{x.foodName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {x.quantity}
                                    </td>
                                    <td>{x.price}</td>
                                    <td>{x.quantity}</td>
                                    <th>
                                        <Link to={`/update/${x._id}`} className="btn btn-ghost btn-md  text-red-600"><GrDocumentUpdate></GrDocumentUpdate></Link>
                                    </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
};

export default AddedFood;