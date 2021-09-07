import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  return (
    <div className="App container">
      <h1>Article</h1>
      <div className="container">
        <CKEditor editor={ClassicEditor} />
      </div>
    </div>
  );
}

export default App;
