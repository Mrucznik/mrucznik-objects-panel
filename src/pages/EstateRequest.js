import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AceEditor from "react-ace";
import ListGroup from "react-bootstrap/ListGroup";
import Entrance from "../components/Entrance";
import Gate from "../components/Gate";
import GateModal from "../components/GateModal";
import EntranceModal from "../components/EntranceModal";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ObjectsCode from "../components/ObjectsCode";

const EstateRequest = () => {
    return (
        <Container fluid className={"mt-3"}>
            <Row>
                <Col>
                    <h2>Kod obiektów</h2>
                    <ObjectsCode/>
                </Col>
                <Col>
                    <h2>Dodatkowe elementy</h2>
                    <ListGroup>
                        <Entrance/>
                        <Gate/>
                    </ListGroup>

                    <div style={{textAlign: "center"}}>
                        <GateModal/>
                        <EntranceModal/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron>
                        <h2>Błąd!</h2>
                        Tu masz błąd pedale.
                    </Jumbotron>
                </Col>
                <Col>
                    <Jumbotron>
                        <h2>Wycena:</h2>
                        To tyle kosztuje ziom
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <Button size="lg">Wyślij propozycję wgrania</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
};

export default EstateRequest;