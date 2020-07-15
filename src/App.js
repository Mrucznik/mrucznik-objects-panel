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
import NewProject from "./pages/NewProject";
import ManageProject from "./pages/ManageProject";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./pages/Home";
import Help from "./pages/Help";
import AdminPanel from "./pages/AdminPanel";
import Prices from "./pages/Prices";
import Login from "./pages/Login";
import TextureStudio from "./pages/TextureStudio";

function App() {
    return (
        <Router>
            <header className="App-header">
                <Navbar variant="dark">
                    {/*<Navbar.Brand href="https://mrucznik-rp.pl">*/}
                    {/*    <img src="https://i.imgur.com/xlMSHLx.png" alt="Mrucznik Role Play" height={86}/>*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Brand as={Link} to="/">
                        <img src={Yarn} alt={"Logo"} width={60} height={60} className="mr-3"/>
                        Panel obiektów
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/projects">Nowe obiekty</Nav.Link>
                        <NavDropdown title="Moje obiekty" id="my-proposals">
                            <NavDropdown.Item as={Link} to="/projects/1">
                                Projekt domu 1
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/projects/2">
                                Projekt domu 2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/texturestudio">Serwer Texture Studio</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Panel administracyjny</Nav.Link>
                        <Nav.Link as={Link} to="/prices">Cennik</Nav.Link>
                        <Nav.Link as={Link} to="/help">Rynek</Nav.Link>
                        <Nav.Link as={Link} to="/help">Pomoc</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Zalogowany jako: <Link to="/login">John_Mrucznik</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <main>
                <Switch>
                    <Route path="/projects">
                        <NewProject/>
                    </Route>
                    <Route path="/admin/projects">
                        <ManageProject/>
                    </Route>
                    <Route path="/texturestudio">
                        <TextureStudio/>
                    </Route>
                    <Route path="/admin">
                        <AdminPanel/>
                    </Route>
                    <Route path="/prices">
                        <Prices/>
                    </Route>
                    <Route path="/help">
                        <Help/>
                    </Route>
                    <Route path="/login">
                        <Login/>
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
