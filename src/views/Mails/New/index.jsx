import React, {useState} from 'react';
import {Col, Container, FormControl, FormLabel, Row} from "react-bootstrap";
import Select from "react-select";
import {useGetAllUsersQuery} from "../../../utils/getUsersList";

const Index = () => {
    const [to, setTo] = useState([])
    const [title, setTitle] = useState('')
    const {data = [], isLoading, error} = useGetAllUsersQuery();
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    if (error) return <h1 className="text-danger">Загрузка...</h1>
    return (
        <>
            <Container>
                <h5 className="text-slate">Новое сообщение</h5>
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
                <Row className="mt-1">
                    <Col xs={3} sm={3} md={2} xl={2} xxl={2}>
                        <FormLabel className="fs-6">
                            Тема:
                        </FormLabel>
                    </Col>
                    <Col xs={9} sm={9} md={10} xxl={10} xl={10}>
                        <FormControl
                            className="shadow-none"
                            size={"sm"}
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col xs={3} sm={3} md={2} xl={2} xxl={2}>
                        <FormLabel className="fs-6">
                            Текст:
                        </FormLabel>
                    </Col>
                    <Col xs={9} sm={9} md={10} xxl={10} xl={10}>
                        <FormControl as={"textarea"}
                            className="shadow-none"
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;