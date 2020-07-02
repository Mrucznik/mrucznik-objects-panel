import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-textmate";

import Button from 'react-bootstrap/Button';

import Yarn from './yarn.svg'
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import EntranceModal from "./components/EntranceModal";
import GateModal from "./components/GateModal";

function App() {
    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container fluid>
                    <Row>
                        <Col>
                            <img src={Yarn} alt={"Logo"} width={48} height={48} className="mr-3" />
                            MRUCZNIK ROLE PLAY - PANEL OBIEKTÓW
                        </Col>
                    </Row>
                </Container>
            </header>

            <main>
                <Container fluid className={"mt-3"}>
                    <Row>
                        <Col>
                            <h2>Kod obiektów</h2>
                            <AceEditor
                                mode="c_cpp"
                                theme="textmate"
                                onChange={onChange}
                                name="UNIQUE_ID_OF_DIV"
                                editorProps={{$blockScrolling: true}}
                                width="100%"
                                height={"50vh"}
                            />
                        </Col>
                        <Col>
                            <h2>Kod obiektów</h2>
                            <ListGroup style={{textAlign: "left"}}>

                            </ListGroup>

                            <GateModal/>
                            <EntranceModal/>
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
                        <Col>
                            <Button size="lg">Wyślij propozycję wgrania</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer>
                <Container fluid>
                    <Row>
                        <Col>Autor: <a href="https://github.com/Mrucznik" title="Mrucznik">Mrucznik</a></Col>
                        <Col></Col>
                        <Col>Ikonka autorstwa <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> z <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default App;
