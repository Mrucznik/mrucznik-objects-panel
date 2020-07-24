import React from 'react';
import {Jumbotron} from "react-bootstrap";
import auth from "../services/auth";

const Logout = () => {
    auth.logout();

    return (
        <Jumbotron>
            Wylogowano.
        </Jumbotron>
    );
};

export default Logout;
