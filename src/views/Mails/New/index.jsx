import React, {useState} from 'react';
import {Button, Col, Container, FormControl, FormLabel, Row} from "react-bootstrap";
import Select from "react-select";
import {useGetAllUsersQuery} from "../../../utils/getUsersList";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "../../../components/Mails/Editor";
import {apiRequest} from "../../../helper/customAxios";
import UploadFiles from "../../../components/Mails/UploadFiles";


const Index = () => {
    const [to, setTo] = useState(null)
    const [title, setTitle] = useState('')
    const [files, setFiles] = useState(null)
    const [htmlContent, setHtmlContent] = useState('')
    const getContent = (htmlContentProp) => {
        setHtmlContent(htmlContentProp);
    }
    const {data = [], isLoading, error} = useGetAllUsersQuery();
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    if (error) return <h1 className="text-danger">Загрузка...</h1>
    const storeNewMessage = (event) => {
        event.preventDefault()
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files_link[]', files[i], files[i].name)
        }
        formData.append('title', title);
        formData.append('description', htmlContent);
        for (let i = 0; i < to.length; i++) {
            formData.append('to[]', to[i]['value'])
        }
        apiRequest.post('/message', formData, {
            headers: {
                headers: {'Content-Type': 'multipart/form-data'},
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <Container className="p-3">
                <h5 className="text-slate">Новое сообщение</h5>
                <form onSubmit={storeNewMessage}>
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
                    <Row className="mt-1">
                        <Col xs={3} sm={3} md={2} xl={2} xxl={2}>
                            <FormLabel className="fs-6">
                                File:
                            </FormLabel>
                        </Col>
                        <Col xs={9} sm={9} md={10} xxl={10} xl={10}>
                            <UploadFiles setFiles={setFiles}/>
                        </Col>
                    </Row>
                    <Button variant="prime-pallet" className="float-end mb-3" type="submit">
                        Отправить
                    </Button>
                </form>

            </Container>
        </>
    );
};

export default Index;