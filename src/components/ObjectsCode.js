import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-textmate";

const ObjectsCode = () => {
    function onChange(newValue) {
        console.log("change", newValue);
    }
    return (
        <div>
            <AceEditor
                mode="c_cpp"
                theme="textmate"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                width="100%"
                height={"50vh"}
            />
        </div>
    );
};

export default ObjectsCode;