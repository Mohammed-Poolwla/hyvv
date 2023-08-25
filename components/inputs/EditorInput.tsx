import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const QuillEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleEditorChange = (value: string) => {
    setEditorHtml(value);
    onChange(value);
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={handleEditorChange}
      className="h-full"
    />
  );
};

export default QuillEditor;
