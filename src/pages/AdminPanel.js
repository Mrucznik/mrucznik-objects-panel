import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload, faProjectDiagram, faEdit, faCheck, faBan} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const AdminPanel = () => {
    return (
        <Container fluid>
            <Row className="text-center">
                <Col>
                    <h1>Projekty</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={8}>
                    <ListGroup>
                        <ListGroup.Item action>
                            <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <FontAwesomeIcon icon={faProjectDiagram} size="lg" className="mr-1" />{' '}
                                        Nowy interior SAN <br/>
                                        Koszt 500$
                                    </Col>
                                    <Col xs={3} md={1}>
                                        <Button variant="outline-primary" style={{width: "100%"}}>
                                            <FontAwesomeIcon icon={faUpload} />
                                        </Button>
                                    </Col>
                                    <Col xs={3} md={1}>
                                        <Button variant="outline-dark" style={{width: "100%"}}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                    </Col>
                                    <Col xs={3} md={1}>
                                        <Button variant="outline-success" style={{width: "100%"}}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </Button>
                                    </Col>
                                    <Col xs={3} md={1}>
                                        <Button variant="outline-danger" style={{width: "100%"}}>
                                            <FontAwesomeIcon icon={faBan} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;