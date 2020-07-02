import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Yarn from './yarn.svg'
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EstateRequest from "./pages/EstateRequest";

function App() {
    return (
        <div className="App">
            <Router>
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
                    <Switch>
                        <Route path="/">
                            <EstateRequest/>
                        </Route>
                    </Switch>
                </main>

                <footer>
                    <Container fluid>
                        <Row>
                            <Col>Autor: <a href="https://github.com/Mrucznik" title="Mrucznik">Mrucznik</a></Col>
                            <Col></Col>
                            <Col style={{textAlign: "right"}}>Ikonka motka autorstwa <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> z <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Col>
                        </Row>
                    </Container>
                </footer>
            </Router>

        </div>
    );
}

export default App;
