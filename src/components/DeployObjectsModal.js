import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const DeployObjectsModal = () => {
    let objectsName = "[nazwa obiektów]"

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal.Dialog show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tworzenie nowych obiektów</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Trwa wgrywanie obiektów na serwer testowy. Nie zamykaj tego okna</p>

                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>

                <p className="text-center">
                    Obiekty zostały wgrane na serwer testowy pod nazwą
                    <p ><b>"<i>{objectsName}</i>"</b>. </p>
                </p>
                <p>
                    Aby je załadować, wpisz
                    <p><b>/rcon loadfs <i>{objectsName}</i></b></p>
                </p>
                <p>
                    Aby teleportować się do pierwszego wejścia, użyj komendy
                    <p><b>/{objectsName.replace(/[^\w]/g,'')}</b></p>
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger">Anuluj</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default DeployObjectsModal;