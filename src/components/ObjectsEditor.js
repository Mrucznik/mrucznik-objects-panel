import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Entrance from "../components/Entrance";
import Gate from "../components/Gate";
import GateModal from "../components/GateModal";
import EntranceModal from "../components/EntranceModal";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ObjectsCode from "../components/ObjectsCode";
import ProcessingError from "./ProcessingError";
import ObjectsInfo from "./ObjectsInfo";
import Valuation from "./Valuation";

const ObjectsEditor = () => {
    return (
        <Container fluid className={"mt-3"}>
            <Row style={{minHeight: "50vh"}}>
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

                    <div className="text-center mt-2">
                        <GateModal/>
                        <EntranceModal/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="info-container">
                        <ObjectsInfo/>
                        {/*<ProcessingError/>*/}
                    </div>
                </Col>
                <Col>
                    <div className="info-container">
                        <Valuation/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ObjectsEditor;