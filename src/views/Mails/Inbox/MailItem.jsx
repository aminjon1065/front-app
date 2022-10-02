import React from 'react';
import {useParams} from "react-router-dom";
import {useGetMessageQuery} from "../../../utils/getMessage";

const MailItem = () => {
    const params = useParams();
    // debugger
    const {data = {}, isLoading, error} = useGetMessageQuery(params.id);

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Error!</h1>
        )
    }
    return (
        <>
            <h1>{data?.title}</h1>
        </>
    );
};

export default MailItem;