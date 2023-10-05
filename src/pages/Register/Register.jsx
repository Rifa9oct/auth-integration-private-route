import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? Please <Link className="text-blue-500 font-bold underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;