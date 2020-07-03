import React from 'react';
import ObjectsEditor from "../components/ObjectsEditor";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const NewProject = () => {
    return (
        <div>
            <ObjectsEditor/>

            <Container className="mt-3">
                <Row className="justify-content-center">
                    <Button as={Col} xs={4}>Wyślij propozycję wgrania</Button>
                </Row>
            </Container>
        </div>
    );
};

export default NewProject;