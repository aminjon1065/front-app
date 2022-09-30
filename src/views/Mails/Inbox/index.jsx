import React, {useEffect, useState} from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";
import {Col, Container, ListGroup, Pagination, Row} from "react-bootstrap";
import InboxList from "../../../components/Mails/InboxList";

const Index = () => {
    const [pageNum, setPageNum] = useState(1);
    const {data = [], isLoading, error} = useGetMessagesQuery(pageNum);
    const [pageLinks, setPageLinks] = useState([]);
    useEffect(() => {
        setPageLinks(data)
    }, [])
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
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Container className="pt-2">
                                    <Pagination className="float-end">
                                        {
                                            pageLinks?.to
                                                ?
                                                <span className={"px-3 align-self-center"}>
                                                    {pageLinks.to} из {pageLinks.total}
                                                </span>
                                                :
                                                null
                                        }
                                        {/*<Pagination.First onClick={firstPage}/>*/}
                                        <Pagination.Prev onClick={prevPage}/>
                                        <Pagination.Next onClick={nextPage}/>
                                        {/*<Pagination.Last onClick={lastPage}/>*/}
                                    </Pagination>
                                </Container>
                            </Col>
                            <Col>
                                <ListGroup className="p-2">
                                    {
                                        data.data.map((message) => (
                                            <InboxList message={message} key={message.id}/>
                                        ))
                                    }
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <h1>Empty</h1>
            }
        </>
    );
};

export default Index;