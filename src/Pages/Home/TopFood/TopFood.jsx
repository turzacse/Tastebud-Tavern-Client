import React, { useEffect, useState } from "react";

const TopFood = () => {
  const [topFood, setTopFood] = useState([]);

  useEffect(() => {
    // Fetch food data from your API
    fetch("http://localhost:5000/allfoods")
      .then((res) => res.json())
      .then((data) => {
        // Calculate the number of orders for each food item
        const foodWithOrders = data.map((food) => ({
          ...food,
          orders: 0, // Initialize with 0 orders
        }));

        // You'll need to fetch order data and update the 'orders' property
        // based on the actual number of orders for each food item.

        // For now, simulate fetching order data and updating the 'orders' property.
        // This is where you should update 'orders' with real order data.
        fetch("http://localhost:5000/order")
          .then((res) => res.json())
          .then((orderData) => {
            // Simulate updating the 'orders' property based on order data
            foodWithOrders.forEach((food) => {
              const ordersForFood = orderData.filter(
                (order) => order.foodId === food._id
              );
              food.orders = ordersForFood.length;
            });

            // Sort food items by the number of orders (top-selling items first)
            foodWithOrders.sort((a, b) => b.orders - a.orders);

            // Set the top-selling food items to state (e.g., top 6)
            const top6Food = foodWithOrders.slice(0, 6);
            setTopFood(top6Food);
          });
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Top Food</h2>
      <div className="grid grid-cols-3">
        {topFood.map((food) => (
          <div key={food._id}>
            <div>
              <h3>{food.foodName}</h3>
              <img className="w-[400px] h-[250px]" src={food.img} alt={food.foodName} />
              <p>Category: {food.foodCategory}</p>
              <p>Price: ${food.price}</p>
              <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFood;
