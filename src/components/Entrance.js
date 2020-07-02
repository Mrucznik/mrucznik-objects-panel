import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Entrance = () => {
    function onClicked() {

    }

    return (
        <ListGroup.Item variant="danger" action onClick={onClicked}>
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faDoorOpen} size="lg" className="mr-1" />
                        Wejście
                    </Col>
                    <Button variant="outline-dark" className="ml-3" as={Col}>
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

export default Entrance;