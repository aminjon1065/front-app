import React, {useState} from 'react';
import {Button, Col, Container, FormControl, FormLabel, Row} from "react-bootstrap";
import Select from "react-select";
import {useGetAllUsersQuery} from "../../../utils/getUsersList";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "../../../components/Mails/Editor";


const Index = () => {
    const [to, setTo] = useState([])
    const [title, setTitle] = useState('')
    const [htmlContent, setHtmlContent] = useState('')
    const getContent = (htmlContentProp) => {
        setHtmlContent(htmlContentProp);
    }
    const {data = [], isLoading, error} = useGetAllUsersQuery();
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    if (error) return <h1 className="text-danger">Загрузка...</h1>
    return (
        <>
            <Container className="p-3">
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
                        <Editor getContent={getContent}/>
                    </Col>
                </Row>
                <Button variant="prime-pallet" className="float-end mb-3">
                    Отправить
                </Button>
            </Container>
        </>
    );
};

export default Index;