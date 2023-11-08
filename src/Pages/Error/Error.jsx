import { Link } from "react-router-dom";
import Meta from "../Shared/Meta";


const Error = () => {
    return (
        <>
        <Meta title={'404'}></Meta>
        <div className="lg:my-20 my-10">
            <div className="card lg:w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/5c0wjwL/err.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <Link to='/' className="card-title">Go back to Home!</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Error;