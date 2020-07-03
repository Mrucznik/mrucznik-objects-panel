import React from 'react';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faEdit, faProjectDiagram, faUpload} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";

const Project = props => {
    let variant;
    if(props.state === "accepted") {
        variant = "success"
    } else if(props.state === "rejected") {
        variant = "danger"
    } else if(props.state === "awaiting") {
        variant = ""
    }

    return (
        <ListGroup.Item action variant={variant} as={Link} to="/admin/projects/1">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <FontAwesomeIcon icon={faProjectDiagram} size="lg" className="mr-1" />{' '}
                        Nowy interior SAN <br/>
                        Tutaj zamieść wszystkie informacje, które mogą przydać się administratorowi, który będzie zatwierdzał Twój projekt.
                        Warto napisać, co to za obiekty oraz dlaczego uważasz, że powinny zostać wgrane na serwer. <br/>
                        Wycena: 12 000 000$
                    </Col>
                    <Col xs={3} md={1}>
                        <Button variant="outline-primary" className="col-button">
                            <FontAwesomeIcon icon={faUpload} />
                        </Button>
                    </Col>
                    <Col xs={3} md={1}>
                        <Button variant="outline-dark" className="col-button">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </Col>
                    <Col xs={3} md={1}>
                        <Button variant="outline-success" className="col-button">
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                    </Col>
                    <Col xs={3} md={1}>
                        <Button variant="outline-danger" className="col-button">
                            <FontAwesomeIcon icon={faBan} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

Project.propTypes = {
    state: PropTypes.string.isRequired
};

export default Project;