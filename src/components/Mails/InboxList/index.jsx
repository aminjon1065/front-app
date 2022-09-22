import React from 'react';
import formatterDay from "../../../utils/formatterDate";
import {Button, Form, ListGroup, OverlayTrigger, Tooltip} from "react-bootstrap";

const Index = ({message, index}) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Выбрать
        </Tooltip>
    );
    return (
        <>
            <ListGroup.Item
                className={`d-flex hover-list-item ${message.opened ? 'bg-soft-grey' : 'fw-bold'}`}
            >
                <span
                    className="text-slate pe-2"
                >
                 <OverlayTrigger
                     placement="bottom"
                     delay={{ show: 250, hide: 400 }}
                     overlay={renderTooltip}
                 >
                     <Form.Check />
                 </OverlayTrigger>
                </span>
                {/*<Form.Check aria-label={message.id} className="px-1"/>*/}
                <span
                    className={`flex-fill`}
                >
                    {
                        message.title
                    }
                </span>
                <span
                    className="align-self-end fst-italic fz-1"
                >
                                {
                                    formatterDay(message.created_at)
                                }

                </span>
            </ListGroup.Item>
        </>
    )
};

export default Index;