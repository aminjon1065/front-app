import React, {useState} from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";
import {ListGroup, Form, Button, Pagination} from "react-bootstrap";
import InboxList from "../../../components/Mails/InboxList";

const Index = () => {
    const [isHover, setIsHover] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const {data = [], isLoading, error} = useGetMessagesQuery(pageNum);
    const prevPage = () => {
        if (pageNum === 1) {
            
        }
    }
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
            <Pagination>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </>
    );
};

export default Index;