import React from "react";
import {Offcanvas} from "react-bootstrap";
import NavMenu from "../MailMenu";

const Index = ({show, handleClose}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} className="w-75">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div
                    onClick={() => {
                        handleClose(true);
                    }}
                >
                    <NavMenu/>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Index;
