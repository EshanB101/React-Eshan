import { Alert } from 'flowbite-react';
import { useState, useEffect } from 'react';

const CustomAlert = ({ color, message, onDismiss }) => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowAlert(false);
            onDismiss();
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [onDismiss]);

    return (
        <>
            {showAlert && (
                <Alert color={color} onDismiss={() => setShowAlert(false)}>
                  <span>
                    <span className="font-medium">{message}</span>
                  </span>
                </Alert>
            )}
        </>
    );
};

export default CustomAlert;