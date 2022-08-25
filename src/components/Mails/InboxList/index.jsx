import React from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";

const Index = () => {
    const {data = [], isLoading, error} = useGetMessagesQuery();
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1 className="text-light bg-danger">Error</h1>
    return (
        <>
            <ul>
                {
                    data.data.length ? data.data.map((msg) => (
                        <li key={msg.id}>
                            {
                                msg.title
                            }
                        </li>
                    )) : "Not found"
                }
            </ul>

        </>
    );
};

export default Index;