import React from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";

const Index = () => {
    const {data = [], isLoading, error} = useGetMessagesQuery();
    if (isLoading) return <h1>Loading...</h1>
    return (
        <>
            <ul>
                {
                    data.map((msg)=>(
                        <li key={msg.id}>
                            {
                                msg.text
                            }
                        </li>
                    ))
                }
            </ul>

        </>
    );
};

export default Index;