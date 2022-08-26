import React, {useState} from 'react';
import {Col, Container, FormControl, FormLabel, Row} from "react-bootstrap";

const Index = () => {
    const [to, setTo] = useState([])
    const changeTo = (event) => {
        event.target.value.map((el) => {
            setTo(el)
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} xl={2} xxl={2}>
                        <FormLabel className="fs-6">
                            Кому:
                        </FormLabel>
                    </Col>
                    <Col xs={9} sm={9} md={10} xxl={10} xl={10}>
                        <FormControl className="shadow-none border-danger-pallet" value={to} onChange={changeTo}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;