import React, {useState} from 'react';
import {Col, Container, FormLabel, Row} from "react-bootstrap";
import Select from "react-select";
import {useGetAllUsersQuery} from "../../../utils/getUsersList";

const Index = () => {
    const [to, setTo] = useState([])
    const {data = [], isLoading, error} = useGetAllUsersQuery();

    if (error) return <h1 className="text-danger">Загрузка...</h1>
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
                        {
                            isLoading
                                ?
                                <span className="text-danger">Загрузка...</span>
                                :
                                <Select
                                    options={data}
                                    isMulti
                                    onChange={(choice) => setTo(choice)}
                                    placeholder={"Выберите кому отправить"}
                                />
                        }

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;