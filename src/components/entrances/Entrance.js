import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {faEdit, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Entrance = () => {
    function onClicked() {

    }

    return (
        <ListGroup.Item action onClick={onClicked} >
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <FontAwesomeIcon icon={faDoorOpen} size="lg" className="mr-1" />{' '}
                        Drzwi do baru
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

export default Entrance;
