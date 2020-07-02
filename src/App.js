import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";

import Button from 'react-bootstrap/Button';

import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

function App() {
    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container fluid>
                    <Row>
                        <Col sm={12} md={6}>
                            Mrucznik Role Play - wycena obiektów
                        </Col>
                    </Row>
                </Container>
            </header>

            <main>
                <Container fluid style={{marginTop: "13px"}}>
                    <Row>
                        <Col>
                            <h3>Kod obiektów</h3>
                            <AceEditor
                                mode="c_cpp"
                                theme="github"
                                onChange={onChange}
                                name="UNIQUE_ID_OF_DIV"
                                editorProps={{$blockScrolling: true}}
                                width="98vw"
                                height={"50vh"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" size="lg">Wyceń</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default App;
