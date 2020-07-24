import React from 'react';
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import auth from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth.isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
