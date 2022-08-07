import React from 'react';
import {Toast, ToastBody, ToastContainer, ToastHeader} from "react-bootstrap";

const Index = ({toast, setToast}) => {
    return (
        <ToastContainer position="top-center">
            <Toast
                bg={toast.variant}
                delay={5000}
                autohide
                show={toast.show}
                onClose={() => setToast({...toast, show: false})}
            >
                <ToastHeader>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{toast.userName ? toast.userName : "Ошибка"}</strong>
                    <small className="text-muted">сейчас</small>
                </ToastHeader>
                <ToastBody>
                    {toast.text}
                </ToastBody>
            </Toast>
        </ToastContainer>
    );
};

export default Index;