import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
        <Jumbotron>
            <h1>Witaj w panelu dodawania obiektów na serwer Mrucznik Role Play.</h1>
            <p>
                Jeśli jesteś twórcą obiektów, i chciałbyś, aby Twoja praca znalazła się na naszym serwerze, wystarczy, że skorzytasz z tego narzędzia. <br/>
                Twoje obiekty zostaną poddane automatycznej wycenione przez system, następnie będziesz mógł zgłosić je do wgrania. <br/>
                Po weryfikacji obiektów przez administratora i uiszczeniu opłaty, zostaną one wgrane na serwer :) <br/>
                <br/>
                Aby używać panelu obiektów, musisz posiadać konto na serwerze Mrucznik Role Play.
            </p>
            <Button>Zaloguj się</Button>
        </Jumbotron>
    );
};

export default Home;