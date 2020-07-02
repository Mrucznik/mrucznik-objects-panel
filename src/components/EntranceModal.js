import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GateModal from "./GateModal";
import Col from "react-bootstrap/Col";

const EntranceModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-danger" size="lg" className="m-2" onClick={handleShow}>Dodaj wejście</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodawanie wejścia</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nazwa</Form.Label>
                            <Form.Control type="text" placeholder="Nazwa wejścia"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wejście (na zewnątrz)</Form.Label>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Text 3D"/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="x"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="y"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="z"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="virtual world"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="interior"/>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wyjście (w środku interioru)</Form.Label>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Text 3D"/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="x"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="y"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="z"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="virtual world"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="interior"/>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Zamknij</Button>
                    <Button variant="primary">Dodaj wejście</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EntranceModal;