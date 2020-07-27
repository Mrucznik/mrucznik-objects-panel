import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
    return (
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
    );
};

export default Footer;