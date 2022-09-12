import React,{useState} from 'react';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from "draft-js";
const Index = ({getContent}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
        sendContent();
    };
    const sendContent = () => {
        getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
    return (
       <>
           <Editor
               editorState={editorState}
               wrapperClassName=""
               editorClassName="demo-editor bg-light mb-5 pb-5"
               toolbar={{
                   options: ['history','inline', 'textAlign', 'blockType', 'fontSize', 'list']
               }}
               onEditorStateChange={handleEditorChange}
           />
           {/*<textarea value={draftToHtml(convertToRaw(text.getCurrentContent()))}></textarea>*/}
       </>

);
};

export default Index;