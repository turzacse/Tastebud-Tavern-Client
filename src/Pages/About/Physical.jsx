import { MdHomeWork } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Physical = () => {
    return (
        <div className="mt-5">
            <div>
                <div className="bg-black text-white p-4 flex justify-between gap-5">

                    <div>
                        <img className="shadow-2xl rounded-3xl" src="https://i.ibb.co/MZ68N0V/footcourt.jpg" alt="" />
                    </div>

                    <div className="mr-10">
                        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">Our Physical Outlet</h2>
                        <div className="mt-10 text-black">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title"><MdHomeWork />404/7A, BSMRSTU, Gopalgonj, Bangladesh</h2>
                                </div>
                            </div>
                        </div>

                        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mt-16">Contact With Us</h2>
                        <div className="mt-10 text-black">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body ">
                                    <p className="text-4xl flex gap-5">
                                        <NavLink to='https://www.facebook.com/fahimmontasir.siam/'><FaFacebookSquare /> </NavLink>
                                        <NavLink to='https://www.linkedin.com/in/turzacse/'><FaLinkedin /> </NavLink>
                                        </p>
                                    {/* <p className="text-4xl"><FaFacebookSquare /></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Physical;