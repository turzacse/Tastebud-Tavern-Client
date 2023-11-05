import { useEffect, useState } from "react";

const ChouseUs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('ChoseUs.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className="bg-black text-white p-4">
            <h2 className="text-xl font-semibold text-center">Why Chose Us</h2> <hr className="w-36  mx-auto my-3"/>
            <h1 className="text-5xl font-bold text-center mb-10">Our Strangth</h1>
            <div className="lg:mx-28 mx-10 grid lg:grid-cols-4 gap-4 grid-cols-2">
                {
                    data.map(item => <>
                        <div className="p-4 card w-60 card-compact bg-gray-800 text-white shadow-xl">
                            <figure><img src={item.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.type}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default ChouseUs;