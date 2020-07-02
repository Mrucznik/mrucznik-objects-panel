import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const GateModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" size="lg" className="m-2" onClick={handleShow}>
                Dodaj bramę
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Dodawanie bramy</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nazwa</Form.Label>
                            <Form.Control type="text" placeholder="Nazwa wejścia"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Zasięg /brama</Form.Label>
                            <Form.Control type="text" placeholder="ID obiektu"/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Obiekt</Form.Label>
                                <Form.Control type="text" placeholder="Promień, w którym zadzaiała /brama"/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Prędkość przesuwania obiektu</Form.Label>
                                <Form.Control type="text" placeholder="Prędkość przesuwania obiektu"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Parametry bramy</Form.Label>
                                <Form.Control type="text" placeholder="Typ uprawnień"/>
                                <Form.Text className="text-muted">
                                    <ol start={0}>
                                        <li>
                                            wszyscy
                                        </li>
                                        <li>
                                            frakcja
                                        </li>
                                        <li>
                                            rodzina
                                        </li>
                                        <li>
                                            gracz (UID)
                                        </li>
                                        <li>
                                            dom
                                        </li>
                                    </ol>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Wartość uprawnień</Form.Label>
                                <Form.Control type="text" placeholder="Wartość uprawnień"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Pozycja zamknięta</Form.Label>
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
                                    <Form.Control type="text" placeholder="rx"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="ry"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="rz"/>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Pozycja otwarta</Form.Label>
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
                                    <Form.Control type="text" placeholder="rx"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="ry"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="rz"/>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Zamknij</Button>
                    <Button variant="primary">Dodaj bramę</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default GateModal;