import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const TextEditor = ({body, setBody}) => {
    var toolbarOptions = [
        ['bold', 'italic', 'underline'],        // toggled buttons
        ['blockquote'],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }]                                 // remove formatting button
      ];

      const module = {
        toolbar: toolbarOptions
      }
    console.log(body)

    return ( 
        <>
            <ReactQuill 
                modules={module}
                theme="snow" 
                // readOnly={true}
                value={body} 
                onChange={setBody} 
                className='rounded-lg'
            /> 
        </>
     );
}
 
export default TextEditor;