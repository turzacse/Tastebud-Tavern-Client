import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="p-4 bg-sky-200">
            
            <div className="hero min-h-screen bg-white shadow-2xl rounded-2xl max-w-lg mx-auto">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-gray-600"><span className="text-red-800">Tastebud Tavern </span>Login</h1>
                    <img className="h-1/2 w-1/2 mx-auto mt-2" src="https://i.ibb.co/sFCdQRR/login.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white border-none bg-[#FF3811]">Login</button>
                            </div>
                        </form>
                        <div>
                            <button className="btn capitalize"><FcGoogle className='text-2xl'></FcGoogle> Continue with Google</button>
                        </div>
                        <div>
                            <p className='my-5'>Don't have na Account? Please <Link to='/register' className='text-red-500'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;