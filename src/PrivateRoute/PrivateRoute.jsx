import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className="flex justify-center items-center mt-28">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;