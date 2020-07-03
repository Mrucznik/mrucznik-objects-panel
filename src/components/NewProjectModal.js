import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Project from "./Project";

const NewProjectModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    props.showFunction['xd'] = handleShow;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tworzenie nowych obiektów</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Aby stworzyć nowe obiekty, wypełnij ten formularz.</p>
                <Form>
                    <Form.Group>
                        <Form.Label>Nazwa projektu</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz nazwę projektu."/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Opis projektu</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Opisz swój projekt."/>
                        <Form.Text className="text-muted">
                            Tutaj zamieść wszystkie informacje, które mogą przydać się administratorowi, który będzie zatwierdzał Twój projekt.
                            Warto napisać, co to za obiekty oraz dlaczego uważasz, że powinny zostać wgrane na serwer.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Zamknij</Button>
                <Button variant="primary">Stwórz nowe obiekty</Button>
            </Modal.Footer>
        </Modal>
    );
};

NewProjectModal.propTypes = {
    showFunction: PropTypes.any
};

export default NewProjectModal;