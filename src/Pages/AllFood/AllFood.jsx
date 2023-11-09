import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Foods from "./Foods";
import Meta from "../Shared/Meta";

const AllFood = () => {
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPages = 9;

  useEffect(() => {
    fetch('https://b8a11-server-side-turzacse.vercel.app/allfoods')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, []);

  const handleSearch = () => {
    const foodItems = foods.filter((food) =>
      food.foodName.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(foodItems);
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  const lastIndex = currentPage * recordsPerPages;
  const firstIndex = lastIndex - recordsPerPages;
  const records = filter.length > 0 ? filter.slice(firstIndex, lastIndex) : foods.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filter.length > 0 ? filter.length : foods.length / recordsPerPages);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const changePage = (id) => {
    setCurrentPage(id);
  }

  return (
    <>
      <Meta title={'allfood'} />
      <div ref={ref} className="lg:m-20 m-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="text-center"
        >
          <h2 className="lg:text-5xl text-3xl font-bold"><span className="text-[#FF3811]">Tastebud Tavern</span>'s Culinary Extravaganza <br /> A Symphony of Flavors</h2>
          <p className="mb-10 text-gray-400 mt-10 md:mx-20">Welcome to Tastebud Tavern, where our menu is a culinary masterpiece that promises to enchant your palate. Explore a world of taste sensations, from savory starters to divine desserts, each dish meticulously crafted to elevate your dining experience. Join us on a gastronomic journey like no other, where every bite tells a story of passion and flavor innovation.</p>
        </motion.div>

        <div className="lg:flex mb-5">
          <div className="w-3/4"></div>

          <div className="lg:w-1/4">
            <input
              type="text"
              placeholder="name"
              className="input input-bordered  pr-16"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button onClick={handleSearch} className="text-blue-600 btn bg-orange-200 lg:ml-2">Search</button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="grid md:grid-cols-3 grid-cols-1 gap-4"
        >
          {
          records?
          records.map(food => (
            <Foods food={food} key={food._id}></Foods>
          ))
          :
          <span className="loading loading-spinner loading-lg"></span>
          }
        </motion.div>

        <div className="join mt-10">
          {numbers.map((n, i) => (
            <button
              onClick={() => changePage(n)}
              key={i}
              className={`join-item btn ${currentPage === n ? 'btn-active' : ''}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFood;
