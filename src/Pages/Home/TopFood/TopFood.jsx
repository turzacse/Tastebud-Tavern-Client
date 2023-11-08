import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
  const [topFood, setTopFood] = useState([]);

  useEffect(() => {
    // Fetch food data from your API
    fetch("http://localhost:5000/allfoods")
      .then((res) => res.json())
      .then((data) => {
        const foodWithOrders = data.map((food) => ({
          ...food,
          orders: 0, 
        }));
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((orderData) => {
            
            foodWithOrders.forEach((food) => {
              const ordersForFood = orderData.filter(
                (order) => order.foodId === food._id
              );
              food.orders = ordersForFood.length;
            });
            foodWithOrders.sort((a, b) => b.orders - a.orders);

            const top6Food = foodWithOrders.slice(0, 6);
            setTopFood(top6Food);
          });
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  return (
    <div className="bg-sky-200 px-10 pb-20 my-10">
      <div className="text-center pt-10">
        <h2 className="text-5xl font-bold">Our Top Selling Foods</h2>
        <p className="w-1/2 mx-auto my-4 text-gray-500">"Discover Culinary Bliss: Our Top Sellers. Taste the extraordinary! From succulent steaks to ocean-fresh seafood and gourmet delights, indulge in our finest creations. Satisfy your cravings at <span className="font-bold text-[#FF3811]">Tastebud Tavern</span></p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {topFood.map((food) => (
          <div key={food._id}>
            <div className="rounded-2xl p-4 bg-black text-white">
              <h3 className="text-xl font-bold mb-4">{food.foodName}</h3>
              <img className="w-[400px] h-[250px] shadow-2xl rounded-2xl" src={food.img} alt={food.foodName} />
              <p>Category: {food.foodCategory}</p>
              <p>Price: ${food.price}</p>
              <Link className="btn btn-primary capitalize">Details</Link>
            </div>
          </div>
        ))}
      </div>
      <Link className="btn bg-[#FF3811] border-none text-white capitalize flex mt-5 w-24 mx-auto" to='/allfood'>See more</Link>
    </div>
  );
};

export default TopFood;
