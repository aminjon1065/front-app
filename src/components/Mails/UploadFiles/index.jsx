import React from 'react';
import {FormControl} from "react-bootstrap";

const Index = ({setFiles}) => {
    const handleChangeFile = (e) => {
        setFiles(e.target.files)
    }
    return (
        <>
            <input multiple type="file" onChange={handleChangeFile}/>
        </>
    );
};

export default Index;