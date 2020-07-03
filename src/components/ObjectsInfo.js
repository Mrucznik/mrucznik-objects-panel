import React from 'react';
import Table from "react-bootstrap/Table";

const ObjectsInfo = () => {
    return (
        <div>
            <h2>Statystyki</h2>
            <Table size="sm">
                <tr>
                    <th> Stworzonych obiektów </th>
                    <th> 5000 </th>
                </tr>
                <tr>
                    <th> Podmienionych tekstur </th>
                    <th> 100 </th>
                </tr>
                <tr>
                    <th> Usuniętych obiektów </th>
                    <th> 100 </th>
                </tr>
                <tr>
                    <th> Dzielnica </th>
                    <th> 1111111 </th>
                </tr>
                <tr>
                    <th> Zajęty obszar </th>
                    <th> 100m^2 </th>
                </tr>
                <tr>
                    <th> Użyte virtual world'y </th>
                    <th> 132 </th>
                </tr>
                <tr>
                    <th> Użyte interiory </th>
                    <th> 22 </th>
                </tr>
            </Table>
        </div>
    );
};

export default ObjectsInfo;