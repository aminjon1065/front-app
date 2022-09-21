import React, {useEffect, useState} from 'react';
import MailRoutes from "../../routes/Mail.Routes";
import Header from "../../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import NavMenu from "../../components/Header/MailMenu";
import ToastAuth from "../../components/ToastAuth";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {apiRequest} from "../../helper/customAxios";

const Index = () => {
    const selector = useSelector(state => state.signIn);
    const [count, setCount] = useState(0);
    const location = useLocation();
    const [toast, setToast] = useState({
        show: false, text: "", variant: "", userName: selector.user.name
    })

    useEffect(() => {
        apiRequest.get('/messages-count').then((res) => {
            setCount(res.data)
        })
        if (location.state === true) {
            setToast({show: true, text: selector.message, userName: selector.user.name, variant: "success"})
        }
    }, [location, selector])
    console.log(count)
    return (
        <>
            <Header/>
            <Container fluid="lg" className="pt-3">
                <Row className="m-0 p-0">
                    <Col sm="3" lg="3" xl="3" className="d-none d-md-block bg- p-0 m-0">
                        <NavMenu count={count}/>
                    </Col>
                    <Col>
                        <ToastAuth toast={toast} setToast={setToast}/>
                        <MailRoutes/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;