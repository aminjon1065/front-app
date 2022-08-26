import React, {useState} from 'react';
import {Col, Container, FormControl, FormLabel, Row} from "react-bootstrap";
import Select from "react-select";
const Index = () => {
    const [to, setTo] = useState([])
    const changeTo = () => {
        console.log('test')
    }
    console.log(to)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
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
                        <FormControl className="shadow-none border-danger-pallet" value={to.map(el=>el)} onChange={changeTo}/>
                        {/*<Select onMenuClose={} onChange={} onMenuOpen={} inputValue={} value={} onInputChange={} />*/}
                        <Select options={options} isMulti onChange={(choice)=>setTo(choice)}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;