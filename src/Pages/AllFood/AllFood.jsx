import { useEffect, useState } from "react";
import Foods from "./Foods";


const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [filter, setFilter] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const handleSearch = () =>{
        const foodItems = foods.filter((food) =>
        food.foodName.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(foodItems);
    }
    return (
        <div className="lg:m-20 m-10">
            <div className="text-center font-bold">
                <h2 className="text-5xl">Our Food Menue</h2>
                <p className="text-2xl">Chose Your Best Choice</p>
            </div>

            <div className="lg:flex mb-5">
                <div className="w-3/4">
                </div>
                <div className="relative w-1/4">
                    <input 
                    type="text" 
                    placeholder="food name"
                    className="input input-bordered  pr-16"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                    onClick={handleSearch}
                    className="btn bg-red-500 text-white font-semibold absolute top-0 right-0 rounded-l-none">Search</button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    filter.length > 0 
                    ? filter.map(food => <Foods food={food} key={food._id}></Foods>)
                    :
                    foods.map(food => <Foods food={food} key={food._id}></Foods>)
                }
                {/* {
                    foods.map(food => <Foods food={food} key={food._id}></Foods>)
                } */}
            </div>
        </div>
    );
};

export default AllFood;