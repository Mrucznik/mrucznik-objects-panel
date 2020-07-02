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
        <ListGroup.Item variant="primary" action onClick={onClicked}>
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faToriiGate} size="lg" className="mr-1" />
                        Brama
                    </Col>
                    <Button variant="outline-dark" className="ml-3" as={Col} onClick={onClicked}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="outline-danger" className="ml-3" as={Col}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default Gate;