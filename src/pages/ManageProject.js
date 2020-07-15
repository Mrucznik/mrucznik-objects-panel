import React from 'react';
import ObjectsEditor from "../components/ObjectsEditor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const ManageProject = () => {
    return (
        <div>
            <ObjectsEditor/>

            <Container className="mt-3">
                <Row className="justify-content-center">
                    <Button as={Col} xs={3} variant="primary">Wgraj na serwer testowy</Button>
                    <Col xs={1}/>
                    <Button as={Col} xs={3} variant="success">Akceptuj</Button>
                    <Col xs={1}/>
                    <Button as={Col} xs={3} variant="danger">Odrzuć</Button>
                </Row>
            </Container>
        </div>
    );
};

export default ManageProject;
