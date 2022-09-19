import React from 'react';
import {useGetMessagesQuery} from "../../../utils/getMessages";
import {getFileFromServer} from "../../../utils/getFileFromServer";

const Index = () => {
    const {data = [], isLoading, error} = useGetMessagesQuery();
    if (isLoading) return <h1>Загрузка...</h1>
    if (error) return <h1 className="text-light bg-danger">Ошибка</h1>
    console.log(data.data)
    return (
        <>
            <ul>
                {
                    data.data.length ? data.data.map((msg, index) => (
                        <li key={msg.id}>
                            {
                                msg.files_link
                                    ?
                                    <img src={getFileFromServer(msg.files_link[0])} width="200px"/>
                                    :
                                    null
                            }
                        </li>
                    )) : <h3>Пусто</h3>
                }
            </ul>

        </>
    );
};

export default Index;