import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import {Route, Routes, useLocation} from "react-router-dom";
import New from "../views/Mails/New";
import Sent from "../views/Mails/Sent";
import NotFound from "../views/NotFound";
import Inbox from "../views/Mails/Inbox";
import Draft from "../views/Mails/Draft";


const MailRoutes = () => {
    const location = useLocation();
    useEffect(() => {

        if (location.pathname === '/mail/inbox') {
            document.title = 'Messages'
        }
    }, [location.pathname])
    return (
        <>
            <Container fluid className="bg-white-pallet rounded shadow-sm h-100">
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