import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const SignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const user = {email, password,name, photo};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                // if(data.insertedID){
                //     console.log('user added successfully to the database')
                // }
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="p-4 bg-sky-200">

                <div className="hero min-h-screen bg-white shadow-2xl rounded-2xl max-w-lg mx-auto">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold text-gray-600"><span className="text-red-800">Tastebud Tavern </span>Sign Up</h1>
                            <img className="h-1/2 w-1/2 mx-auto mt-2" src="https://i.ibb.co/sFCdQRR/login.png" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={SignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn text-white border-none bg-[#FF3811]">Login</button>
                                </div>
                            </form>
                            <div>
                                <p className='my-5'>Don't have na Account? Please <Link to='/login' className='text-red-500'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;