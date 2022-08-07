import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import logo from "./../../../assets/images/logo.png";
import {Container, FloatingLabel, Image, Form, Button} from "react-bootstrap";
import {BiLogIn, BiLoaderCircle} from "react-icons/bi";
import ToastAuth from "../../../components/ToastAuth";
import {signInService} from "../../../services/auth/signIn.service";
import {useDispatch} from "react-redux";
import {signed, signedError} from "../../../store/SLice/signInSlice";

const Index = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toast, setToast] = useState({
        show: false, text: "", variant: ""
    })
    const [loader, setLoader] = useState(false);
    const [credintials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const loginBtn = useRef(null);

    useEffect(() => {
        loginRef.current.focus()
    }, [])
    const changeFocusLoginToPassword = (event) => {
        if (event.key === "Enter") {
            passwordRef.current.focus();
        }
    }

    const changePasswordToBtn = (event) => {
        if (event.key === "Enter") {
            loginBtn.current.click()
            console.log()
        }
    }
    const emailChange = (e) => {
        setCredentials({...credintials, email: e.target.value});
    };
    const passwordChange = (e) => {
        setCredentials({...credintials, password: e.target.value});
    };

    const AuthUser = async () => {
        setLoader(true);
        await signInService(credintials).then((response) => {
            if (response.status === 201) {
                localStorage.setItem("JWT_token", response.data.token)
                dispatch(signed(response.data))
                navigate("/mail/inbox", {state: true})
            }
        }).catch(error => {
            dispatch(signedError())
            setToast({...toast, text: error.response.data.message, show: true, variant: "danger"})
            setLoader(false)
        })
    };
    return (
        <>
            <ToastAuth toast={toast} setToast={setToast}/>
            <Container className="vh-100 d-flex justify-content-center align-items-center">
                <Container className="sign-in-container col-sm-12 col-md-6 col-lg-5 col-xl-4">
                    <Image src={logo} className="mx-auto d-block mb-2" width={96}/>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email адрес"
                        className="mb-3"
                    >
                        <Form.Control
                            ref={loginRef}
                            type="email"
                            placeholder="name@example.com"
                            value={credintials.email}
                            onChange={emailChange}
                            className="sign-in-input shadow-sm"
                            onKeyDown={changeFocusLoginToPassword}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Пароль">
                        <Form.Control
                            ref={passwordRef}
                            type="password"
                            placeholder="********"
                            value={credintials.password}
                            onChange={passwordChange}
                            className="sign-in-input shadow-sm"
                            onKeyDown={changePasswordToBtn}
                        />
                    </FloatingLabel>
                    <Button
                        size="lg"
                        className={`w-100 mt-3 text-apple-milk shadow-none mh-100 ${loader ? 'disabled' : null}`}
                        variant="apple-cyan"
                        onClick={AuthUser}
                        ref={loginBtn}
                    >
                        {
                            loader
                                ?
                                (
                                    <span><BiLoaderCircle/> Загрузка...</span>
                                )
                                :
                                (
                                    <>
                                        <span className="me-1">
                                          <BiLogIn/>
                                        </span>
                                        Войти
                                    </>
                                )
                        }
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default Index;