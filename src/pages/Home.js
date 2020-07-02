import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Witaj w panelu dodawania obiektów na serwer Mrucznik Role Play.</h1>
                <p>
                    Jeśli jesteś twórcą obiektów, i chciałbyś, aby Twoja praca znalazła się na naszym serwerze, wystarczy, że skorzytasz z tego narzędzia.
                    Twoje obiekty zostaną wycenione oraz zweryfikowane przez administratora.
                </p>
            </Jumbotron>
        </div>
    );
};

export default Home;