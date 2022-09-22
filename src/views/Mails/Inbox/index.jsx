import React, {useEffect, useState} from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";
import {ListGroup, Pagination} from "react-bootstrap";
import InboxList from "../../../components/Mails/InboxList";

const Index = () => {const [pageNum, setPageNum] = useState(1);
    const {data = [], isLoading, error} = useGetMessagesQuery(pageNum);
    const [pageLinks, setPageLinks] = useState([]);
    useEffect(() => {
        setPageLinks(data.links)
    })
    const prevPage = () => {
        if (pageNum === 1) {
            setPageNum(1)
        }
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }

    const nextPage = () => {
        if (data.next_page_url) {
            setPageNum(pageNum + 1)
        }
    }

    const lastPage = () => {
        setPageNum(data.last_page)
    }
    const firstPage = () => {
        setPageNum(1)
    }
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Error!</span>
    }

    return (
        <>
            {
                data.data.length > 0
                    ?
                    <>
                        <ListGroup className="p-2">
                            {
                                data.data.map((message, index) => (
                                    <InboxList message={message} index={index} key={message.id}/>
                                ))
                            }
                        </ListGroup>
                        <Pagination className="float-end">
                            <Pagination.First onClick={firstPage}/>
                            <Pagination.Prev onClick={prevPage}/>
                            <Pagination.Next onClick={nextPage}/>
                            <Pagination.Last onClick={lastPage}/>
                        </Pagination>
                    </>
                :
                    <h1>Empty</h1>

            }
        </>
    );
};

export default Index;