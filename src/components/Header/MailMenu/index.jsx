import React from "react";
import {Nav, Button, Image, Badge} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import inbox from "./../../../assets/icons/inbox.svg";
import send from "./../../../assets/icons/send.svg";
import draft from "./../../../assets/icons/draft.svg";
import newMessage from "./../../../assets/icons/new-message.svg";

const Index = ({count}) => {
    return (
        <>
            <Nav
                defaultActiveKey="/mail/inbox"
                className="flex-column border-md-end"
            >
                <Button
                    variant=""
                    className={`text-start hover-btn rounded-3 py-2 ps-2 my-1 shadow-none`}
                    as={NavLink}
                    to="/mail/new"
                >
                  <span className="pe-2">
                      <Image src={newMessage} width={24}/>
                  </span>
                    Написать
                </Button>
                <Button
                    variant=""
                    className="text-start hover-btn rounded-3 py-2 ps-2 my-1 shadow-none"
                    as={NavLink}
                    to="/mail/inbox"
                >
                  <span className="pe-2">
                      <Image src={inbox} width={24}/>
                  </span>
                    Входящие
                    {
                        count
                            ?
                            <Badge bg="classic-blue" className="float-end">
                                {count}
                            </Badge>
                            :
                            null
                    }
                </Button>
                <Button
                    variant=""
                    className="text-start hover-btn rounded-3 py-2 ps-2 my-1 shadow-none"
                    as={NavLink}
                    to="/mail/sent"
                >
                  <span className="pe-2">
                      <Image src={send} width={24}/>
                  </span>
                    Отправленные
                </Button>
                <Button
                    variant=""
                    className="text-start hover-btn rounded-3 py-2 ps-2 my-1 shadow-none"
                    as={NavLink}
                    to="/mail/draft"
                >
                  <span className="pe-2">
                      <Image src={draft} width={24}/>
                  </span>
                    Черновики
                </Button>
            </Nav>
        </>
    );
};

export default Index;
