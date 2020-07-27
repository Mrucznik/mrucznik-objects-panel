import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import Yarn from "../../yarn.svg";
import Nav from "react-bootstrap/Nav";
import auth from "../../services/auth";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

const Header = () => {
    return (
        <header className="App-header">
            <Navbar variant="dark" expand="lg">
                {/*<Navbar.Brand href="https://mrucznik-rp.pl">*/}
                {/*    <img src="https://i.imgur.com/xlMSHLx.png" alt="Mrucznik Role Play" height={86}/>*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Brand as={Link} to="/">
                    <img src={Yarn} alt={"Logo"} width={60} height={60} className="mr-3"/>
                    Panel obiektów
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {auth.isAuthenticated() ?
                            <>
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
                            </>
                            :
                            <>

                            </>
                        }
                    </Nav>
                    {auth.isAuthenticated()
                        ?
                        <>
                            <Navbar.Text>
                                Zalogowany jako: <Link to="/login">John_Mrucznik</Link>
                            </Navbar.Text>
                            <Nav.Link as={Link} to="/logout">
                                <FontAwesomeIcon icon={faSignOutAlt} size={"lg"} style={{color: "white"}}/>
                            </Nav.Link>
                        </>
                        :
                        <Nav.Link as={Link} to="/login">
                            Zalogouj
                        </Nav.Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;