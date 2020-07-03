import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToriiGate, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Gate = () => {
    function onClicked() {

    }

    return (
        <ListGroup.Item action onClick={onClicked}>
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <FontAwesomeIcon icon={faToriiGate} size="lg" className="mr-1" />{' '}
                        Brama garażowa
                    </Col>
                    <Col xs={6} lg={2}>
                        <Button variant="outline-dark" onClick={onClicked} className="col-button">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </Col>
                    <Col xs={6} lg={2}>
                        <Button variant="outline-danger" className="col-button">
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default Gate;