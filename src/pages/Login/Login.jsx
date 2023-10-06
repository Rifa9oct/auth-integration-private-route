import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signinUser,signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signinUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
                // navigate("/orders");
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="text-sm label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here? Please <Link className="text-blue-500 font-bold underline" to="/register">Register</Link></p>
                        <div className="flex items-center border-solid border-2 border-indigo-600 p-2 rounded-lg font-semibold">
                            <p className="text-2xl"><FcGoogle/></p>
                            <p><button onClick={handleGoogleSignIn}>Continue with google</button></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;