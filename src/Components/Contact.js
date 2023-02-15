import {Modal,Button} from 'flowbite-react'
import React, {useState} from 'react';
import CustomAlert from "./Alert";

const Contact = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        setShow(false);
        setShowAlert(true);
    };

    const handleAlertDismiss = () => {
        setShowAlert(false);
    };
    return (
        <div>
            {showAlert && (
                <CustomAlert
                    color="success"
                    message="Successful clicked!"
                    onDismiss={handleAlertDismiss}
                />
            )}

            <React.Fragment>
                <Button onClick={() => setShow(true)}>
                    Show modal
                </Button>
                <Modal
                    show={show}
                    onClose={() => setShow(false)}>
                    <Modal.Header>
                        Modal Header
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleButtonClick}>I accept</Button>
                        <Button onClick={() => setShow(false)} color="gray">Decline</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div>
    );
}

export default Contact;