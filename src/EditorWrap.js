const EditorWrap = () => {
    <div className="editorWrap">
    <ToolBar text="Editor" maxEditor={ maxEditor } />
    <textarea 
      name="editor" 
      id="editor" 
      rows="12" 
      value = { text } 
      onChange={ handleChange } ></textarea>
  </div>
}