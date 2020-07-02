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
import AcceptEstates from "./pages/AcceptEstates";
import MyEstates from "./pages/MyEstates";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <header className="App-header">
                <Navbar variant="dark">
                    <Navbar.Brand as={Link} to="/">
                        <img src={Yarn} alt={"Logo"} width={48} height={48} className="mr-3"/>
                        Mrucznik Role Play - panel obiektów
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/new">Nowe obiekty</Nav.Link>
                        <NavDropdown title="Moje obiekty" id="my-proposals">
                            <NavDropdown.Item as={Link} to="/objects/dom1">
                                Projekt domu 1
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/objects/dom2">
                                Projekt domu 2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/admin">Akceptuj obiekty</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Zalogowany jako: <Link to="/logout">John_Mrucznik</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <main>
                <Switch>
                    <Route path="/admin">
                        <AcceptEstates/>
                    </Route>
                    <Route path="/objects">
                        <MyEstates/>
                    </Route>
                    <Route path="/new">
                        <EstateRequest/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </main>

            <footer>
                <Container fluid>
                    <Row>
                        <Col>Autor strony: <a href="https://github.com/Mrucznik" title="Mrucznik">Mrucznik</a></Col>
                        <Col style={{textAlign: "right"}}>Ikonka motka autorstwa <a
                            href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> z <a
                            href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Col>
                    </Row>
                </Container>
            </footer>
        </Router>
    );
}

export default App;
