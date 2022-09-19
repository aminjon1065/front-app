import React, {useEffect, useState} from 'react';
import {Button, Container, FloatingLabel, Form, Image} from "react-bootstrap";
import logo from "../../../assets/images/logo.png";

const Index = () => {
    useEffect(() => {
        document.title = "Регистрация"
    })
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
    const [rank, setRank] = useState("");
    const [signature, setSignature] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const emailChange = (event) => {
        setEmail(event.target.value)
    }
    const nameChange = (event) => {
        setName(event.target.value)
    }
    const regionChange = (event) => {
        setRegion(event.target.value)
    }
    const positionChange = (event) => {
        setPosition(event.target.value)
    }
    const departmentChange = (event) => {
        setPosition(event.target.value)
    }
    const rankChange = (event) => {
        setRank(event.target.value)
    }
    const signatureChange = (event) => {
        setSignature(event.target.files)
    }
    const avatarChange = (event) => {
        setAvatar(event.target.files)
    }
    return (
        <>
            <Container className="vh-100 d-flex justify-content-center align-items-center">
                <Container className="sign-in-container col-sm-12 col-md-6 col-lg-5 col-xl-4">
                    <Image src={logo} className="mx-auto d-block mb-2" width={96}/>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Имя и Фамилия"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            value={name}
                            onChange={nameChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email адрес"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={emailChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Регион"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            value={region}
                            onChange={regionChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Должность"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            value={position}
                            onChange={positionChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Отдел"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            value={department}
                            onChange={departmentChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Звание"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            value={rank}
                            onChange={rankChange}
                            className="sign-in-input shadow-sm"
                        />
                    </FloatingLabel>
                    <Form.Group
                        className="mb-3 bg-white p-2 shadow-sm border border-1 rounded"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Подпись</Form.Label>
                        <Form.Control
                            accept="image/png, image/gif, image/jpeg"
                            type="file"
                            onChange={(e) => signatureChange(e)}
                            className="shadow-sm"
                        />
                    </Form.Group>
                    <Form.Group
                        className="bg-white p-2 shadow-sm border border-1 rounded"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Аватар</Form.Label>
                        <Form.Control
                            accept="image/png, image/gif, image/jpeg"
                            type="file"
                            onChange={(e) => avatarChange(e)}
                            className="shadow-sm"
                        />
                    </Form.Group>
                    <Button
                        size="lg"
                        className={`w-100 mt-3 text-apple-milk shadow-none mh-100`}
                        variant="apple-cyan"
                    >
                        Создать
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default Index;