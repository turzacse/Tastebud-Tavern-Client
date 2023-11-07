import { useEffect, useState } from "react";
import Foods from "./Foods";


const AllFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allfoods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <div className="lg:m-20 m-10">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    foods.map(food => <Foods food={food} key={food._id}></Foods>)
                }
            </div>
        </div>
    );
};

export default AllFood;