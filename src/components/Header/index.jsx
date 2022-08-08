import React, {useState} from "react";
import {
    Button,
    Container,
    Dropdown,
    FormControl, Image,
    InputGroup,
    Navbar,
} from "react-bootstrap";
import {CgMenu} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";
import {MdNotificationsActive} from "react-icons/md";
import Navigation from "./SideMenu";
import {useSelector} from "react-redux";
import {getFileFromServer} from "../../utils/getFileFromServer";
import './style.css'

const Index = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selector = useSelector(state => state.signIn)
    return (
        <>
            <Navbar
                collapseOnSelect
                sticky={"top"}
                bg="white"
                expand="sm"
                className="shadow-sm"
            >
                <Container fluid="lg">
                    <Button
                        variant=""
                        onClick={handleShow}
                        className="d-sm-block d-md-none shadow-none"
                    >
                        <CgMenu/>
                    </Button>
                    {show ? <Navigation show={show} handleClose={handleClose}/> : null}
                    <Navbar.Brand as={Link} to={"/"} className="m-0">
            <span className="m-0 p-0 fw-bold fw-lighter bg-dark text-light ps-2 pe-2 pt-1 pb-1 rounded-3 lh-1">
              AKN
            </span>
                    </Navbar.Brand>
                    <Container className="search-container ms-0">
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="shadow-none border-hover-links search-input rounded"
                                aria-label="Search"
                            />
                            <span className="position-relative d-flex justify-content-center align-content-center">
                <Button
                    className="search-btn border-0 shadow-none"
                    variant="outline-hover-links"
                >
                  <BsSearch className="text-black"/>
                </Button>
              </span>
                        </InputGroup>
                    </Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <span className={"me-1 fs-4"}>
                          <MdNotificationsActive/>
                        </span>
                        <Dropdown role={"menubar"}>
                            <Dropdown.Toggle
                                as={"span"}
                                className="profile-dropdown fs-4"
                                id="dropdown-basic"
                            >
                                {
                                    selector.user.avatar
                                        ?
                                        <Image src={getFileFromServer(`avatars/${selector.user.avatar}`)} width={24}
                                               roundedCircle/>
                                        :
                                        <BiUserCircle/>
                                }
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-2">
                                <Dropdown.Item
                                    as={NavLink} to="/profile"
                                    className="px-2 py-1 hover-btn"
                                >
                                    @{selector.user.name}
                                </Dropdown.Item>
                                <hr/>
                                <Dropdown.Item
                                    className="px-2 py-1 fz-1"
                                >
                                    Звание: {selector.user.rank}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="px-2 py-1 hover-btn fz-1"
                                >
                                    Позиция: {selector.user.position}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="px-2 py-1 hover-btn fz-1"
                                >Департамент: {selector.user.department}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="px-2 py-1 hover-btn fz-1">Регион: {selector.user.region}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Index;
