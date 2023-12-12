import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ImCross } from 'react-icons/im';
import Swal from "sweetalert2";
import Meta from "../../Shared/Meta";


const OrderedFood = () => {
    const [order, setOrder] = useState([]);
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://b8a11-server-side-turzacse.vercel.app/order',{credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                const filteredOrders = data.filter((item) => item.buyerEmail === user.email);
                setMyOrder(filteredOrders);
            })
    }, [user.email]);

    console.log(order, myOrder);

    //const {_id, foodName, price, date, quantity } = myOrder || null;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
             fetch(`https://b8a11-server-side-turzacse.vercel.app/order/${_id}`,{
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                      const remain = myOrder.filter(cart => cart._id !== _id);
                      console.log(remain);
                      setMyOrder(remain);
                }
             })
            }
          })
    }
    return (
        <>
        <Meta title={"ordered food"}></Meta>
        <div className="lg:mx-20 md:mx-10 mx-4 my-20 bg-sky-300 rounded-2xl">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-green-400 h-14">
                        <tr className="text-xl">
                            <th>Name</th>
                            <th>Quantit</th>
                            <th>Total Price</th>
                            <th>Received date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map(x => <tr key={x._id}>
                                
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
                                    <td>{x.quantity*x.price}</td>
                                    <td>{x.date}</td>
                                    <th>
                                        <button  onClick={() => handleDelete(x._id)} className="btn btn-ghost btn-md  text-red-600"><ImCross></ImCross></button>
                                    </th>
                                
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
        </>
    );
};

export default OrderedFood;