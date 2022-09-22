import React from 'react';
import formatterDay from "../../../utils/formatterDate";
import {ListGroup} from "react-bootstrap";

const Index = ({message, index}) => {
    return (
        <>
            <ListGroup.Item
                className={`d-flex hover-list-item ${message.opened ? 'bg-soft-grey' : 'fw-bold'}`}
            >
                <span className="text-slate pe-2">{index + 1}).</span>
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