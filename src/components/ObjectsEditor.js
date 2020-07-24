import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Entrance from "./entrances/Entrance";
import Gate from "./gates/Gate";
import GateModal from "./gates/GateModal";
import EntranceModal from "./entrances/EntranceModal";
import Container from "react-bootstrap/Container";
import ObjectsCode from "../components/ObjectsCode";
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
