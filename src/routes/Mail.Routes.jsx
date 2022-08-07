import React from 'react';
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import New from "../views/Mails/New";
import Sent from "../views/Mails/Sent";
import NotFound from "../views/NotFound";
import Inbox from "../views/Mails/Inbox";
import Draft from "../views/Mails/Draft";


const MailRoutes = () => {
    return (
        <>
            <Container fluid className="bg-white rounded">
                <Routes>
                    <Route path={"/inbox"} element={<Inbox/>}/>
                    <Route path={"/new"} element={<New/>}/>
                    <Route path={"/sent"} element={<Sent/>}/>
                    <Route path={"/draft"} element={<Draft/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default MailRoutes;