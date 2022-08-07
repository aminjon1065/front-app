import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../views/MainPage";
import Dashboard from "../views/Admin/Dashboard";
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import NotFound from "../views/NotFound";
import {useNavigate} from "react-router-dom";
import Mails from "../views/Mails";
import {useDispatch} from "react-redux";
import {isAuthService} from "../services/auth/isAuth.service";
import {isAuth, signedError} from "../store/SLice/signInSlice";
import Loader from "../components/Loader";
import {Container} from "react-bootstrap";

const MainRoutes = () => {
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const token = localStorage.getItem('JWT_token')
    useEffect(() => {
        if (token) {
            isAuthService(token).then((response) => {
                if (response.status === 200) {
                    dispatch(isAuth(response.data))
                    setLoader(false)
                    navigate('/mail/inbox')
                }
            }).catch(error => {
                if (error.response.status === 401) {
                    dispatch(signedError)
                    localStorage.removeItem("JWT_token")
                    setLoader(false)
                    navigate("/sign-in")
                }
            })
        } else {
            navigate("/sign-in")
            setLoader(false)
        }
    }, [token])
    return (
        <>
            {
                loader
                    ?
                    // <Container className="vh-100">
                    <Container className="d-flex align-items-center justify-content-center vh-100">
                        <Loader/>
                    </Container>
                    // </Container>
                    :
                    <>
                        <div className={"bg-gray-bg vh-100"}>
                            <Routes>
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="/dashboard/*" element={<Dashboard/>}/>
                                <Route path="/mail/*" element={<Mails/>}/>
                                <Route path="/sign-in" element={<SignIn/>}/>
                                <Route path="/sign-up" element={<SignUp/>}/>
                                <Route path={"*"} element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </>
            }
        </>
    );
};

export default MainRoutes;