import React, {useState} from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";
import {ListGroup, Form} from "react-bootstrap";
import InboxList from "../../../components/Mails/InboxList";

const Index = () => {
    const [isHover, setIsHover] = useState(false);
    const {data = [], isLoading, error} = useGetMessagesQuery();
    if (isLoading) {
        return <span>Loading...</span>
    }
    if (error) {
        return <span>Error!</span>
    }
    const hoverItem = () => {
        setIsHover(prevState => !prevState)
    }
    console.log(isHover)
    return (
        <>
            <ListGroup className="p-2">
                {
                    data.data.map((message, index) => (
                        <InboxList message={message} index={index} key={message.id}/>
                    ))
                }
            </ListGroup>
        </>
    );
};

export default Index;