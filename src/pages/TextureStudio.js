import React from 'react';
import auth from "../services/auth";

const TextureStudio = () => {
    return (
        <div>
            {auth.isAuthenticated() ? "Zalogowany " + auth.getSession().id : "Niezalogowany"}
        </div>
    );
};

export default TextureStudio;
