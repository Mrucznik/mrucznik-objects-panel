import React from 'react';
import Table from "react-bootstrap/Table";

const Valuation = () => {
    return (
        <div>
            <h2>Wycena</h2>
            <Table size="sm">
                <tr>
                    <th> Koszt obiektów </th>
                    <th> 5000$ </th>
                </tr>
                <tr>
                    <th> Bramy </th>
                    <th> 100$ </th>
                </tr>
                <tr>
                    <th> Wejścia </th>
                    <th> 100$ </th>
                </tr>
                <tr>
                    <th> Razem </th>
                    <th> 1111111$ </th>
                </tr>
            </Table>
        </div>
    );
};

export default Valuation;