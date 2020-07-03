import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

const Prices = () => {
    return (
        <Jumbotron>
            <h1>Cennik</h1>
            <Table>
                <thead>
                    <th>Rodzaj</th>
                    <th>Cena</th>
                </thead>
                <tr>
                    <th>Stworzenie obiektu</th>
                    <th>10$</th>
                </tr>
                <tr>
                    <th>Podmiana materiału</th>
                    <th>50$</th>
                </tr>
                <tr>
                    <th>Zesranie się</th>
                    <th>69$</th>
                </tr>
                <tr>
                    <th>Wskrzeszenie Adolfa Hitlera</th>
                    <th>1488</th>
                </tr>
            </Table>
        </Jumbotron>
    );
};

export default Prices;