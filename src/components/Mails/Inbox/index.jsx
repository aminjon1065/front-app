import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";

const Index = () => {
    return (
        <>
            <ListGroup as="ul" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                    </div>
                    <Badge bg="classic-blue" pill>
                        14
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default Index;