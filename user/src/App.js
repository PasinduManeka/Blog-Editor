import React, { useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

function App() {
  const [value, setValue] = useState("");

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setValue(data);
  };
  return (
    <div className="container">
      <h1>Article</h1>
      <div className="container">
        <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
      </div>
      <div>{ReactHtmlParser(value)}</div>
    </div>
  );
}

export default App;
