import React, { useState } from "react";
import dynamic from "next/dynamic";

// Editor
const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
);
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

const RichEditor = ({ setValue }) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
        sendContent(setValue);
    };

    const sendContent = (setEditorValue) => {
        setEditorValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="draft__editor_wrapper"
                editorClassName="draft__editor"
            />
        </>
    );
};

export default RichEditor;