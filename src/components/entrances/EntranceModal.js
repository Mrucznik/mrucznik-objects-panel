import React, {useState} from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'Niepoprawne dane!',
        required: 'Pole wymagane!',
        notType: 'Niepoprawne dane!'
    },
    string: {
        // eslint-disable-next-line no-template-curly-in-string
        min: "Pole musi posiadać co najmniej ${min} znaków",
        // eslint-disable-next-line no-template-curly-in-string
        max: "Pole musi posiadać nie więcej niż ${max} znaków",
    }
});

const validationSchema = yup.object().shape({
    entryName: yup.string().max(64).required(),
    outText3D: yup.string(),
    outX: yup.number().required(),
    outY: yup.number().required(),
    outZ: yup.number().required(),
    outVW: yup.number().integer(),
    outInt: yup.number().integer(),
    inText3D: yup.string(),
    inX: yup.number().required(),
    inY: yup.number().required(),
    inZ: yup.number().required(),
    inVW: yup.number().integer(),
    inInt: yup.number().integer()
});

const EntranceModal = () => {
    const [show, setShow] = useState(false);

    const {register, handleSubmit, control, errors} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => console.log(data);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" size="lg" className="m-2" onClick={handleShow}>
                Dodaj wejście
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dodawanie wejścia</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group controlId="entryName">
                            <Form.Label>Nazwa</Form.Label>
                            <Form.Control type="text" name="entryName" placeholder="Nazwa wejścia" ref={register}
                                          isInvalid={!!errors.entryName}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.entryName?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wejście (na zewnątrz)</Form.Label>
                            <Form.Group>
                                <Form.Control type="text" name="outText3D" placeholder="Text 3D" ref={register}
                                              isInvalid={!!errors.outText3D}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.outText3D?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="outX" placeholder="x" ref={register} isInvalid={!!errors.outX}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.outX?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="outY" placeholder="y" ref={register} isInvalid={!!errors.outY}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.outY?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="outZ" placeholder="z" ref={register} isInvalid={!!errors.outZ}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.outZ?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="outVW" placeholder="virtual world" ref={register} isInvalid={!!errors.outVW}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.outVW?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="outInt" placeholder="interior" ref={register} isInvalid={!!errors.outInt}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.outInt?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wyjście (w środku interioru)</Form.Label>
                            <Form.Group>
                                <Form.Control type="text" name="inText3D" placeholder="Text 3D" ref={register} isInvalid={!!errors.inText3D}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.inText3D?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="inX" placeholder="x" ref={register} isInvalid={!!errors.inX}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.inX?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="inY" placeholder="y" ref={register} isInvalid={!!errors.inY}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.inY?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="inZ" placeholder="z" ref={register} isInvalid={!!errors.inZ}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.inZ?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="inVW" placeholder="virtual world" ref={register} isInvalid={!!errors.inVW}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.inVW?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="inInt" placeholder="interior" ref={register} isInvalid={!!errors.inInt}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.inInt?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Zamknij</Button>
                        <Button variant="primary" type="submit">Dodaj wejście</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default EntranceModal;
