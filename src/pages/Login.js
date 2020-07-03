import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Login = () => {
    return (
        <Jumbotron style={{minHeight: "66vh"}}>
            <Modal.Dialog style={{minWidth: "33vw"}}>
                <Form>
                    <Modal.Header className="text-center">
                        <h3>Logowanie</h3>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            Aby zalogować się, wpisz poniżej swój login i hasło.
                        </p>

                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" placeholder="Nick w grze"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" placeholder="Hasło"/>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="submit">Zaloguj się</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </Jumbotron>
    );
};

export default Login;