import React, {useState} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import auth from "../services/auth";
import {useForm} from "react-hook-form";
import Redirect from "react-router-dom/es/Redirect";

const Login = () => {
    const [end, setEnd] = useState(false);

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        auth.login(data.nick, data.password).then(() => {
            setEnd(true)
        });
    };

    return (!end ? <Jumbotron style={{minHeight: "66vh"}}>
            <Modal.Dialog style={{minWidth: "33vw"}}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header className="text-center">
                        <h3>Logowanie</h3>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            Aby zalogować się, wpisz poniżej swój login i hasło.
                        </p>

                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <Form.Control name="nick" type="text" placeholder="Nick w grze" ref={register}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Hasło" ref={register}/>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="submit">Zaloguj się</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </Jumbotron> : <Redirect to={"/projects"}/>
    );
};

export default Login;
