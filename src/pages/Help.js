import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import NewProjectModal from "../components/NewProjectModal";
import DeployObjectsModal from "../components/DeployObjectsModal";
import Button from "react-bootstrap/Button";

const Help = () => {
    let modalClick = {};
    function OnClick() {
        modalClick.xd()
    }

    return (
        <Jumbotron>
            <h1>Pomoc</h1>
            <span>
                Tu znajdziesz pomoc odnośnie tego, jak korzystać z tego narzędzia, oraz opis, w jaki sposób działa.
            </span>

            <h2 className="mt-2">Tutorial</h2>
            <span>
                Lorem ipsum
            </span>

            <h2 className="mt-2">Działanie</h2>
            <span>
                Lorem ipsum
            </span>

            <NewProjectModal showFunction={modalClick}/>
            <Button onClick={OnClick}/>

            <DeployObjectsModal/>
        </Jumbotron>
    );
};

export default Help;