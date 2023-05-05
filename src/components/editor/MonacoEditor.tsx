import React, { useRef } from "react";
import dynamic from "next/dynamic";
import * as yaml from "js-yaml";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const MonacoEditor = ({ value, type }: any): JSX.Element => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  return (
    <div>
      <Editor
        height={`calc(100vh - 100px)`}
        defaultLanguage={type}
        value={
          type === "json"
            ? `${JSON.stringify(value, null, "\t")}`
            : `${yaml.dump(value)}`
        }
        onMount={handleEditorDidMount}
        // line={100}
      />
    </div>
  );
};

export default MonacoEditor;
