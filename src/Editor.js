import { marked } from "marked";
import { useState } from "react";
import ToolBar from "./ToolBar";
// create tool bar for `Editor` and `Preview`
// need to pass String `Editor` or `Preview`

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';


const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = () => {
    //default text for editor
    const [text, setText] = useState(defaultText);
    //tranlate for content
    const [translate, setTranslate] = useState(marked.parse(defaultText, { gfm:true, breaks:true }));
    //editor is maximized or not
    const[maxEditor, setMaxEditor] = useState(false);
    //preview is maximized or not
    const[maxPreview, setMaxPreview] = useState(false);


    //handle change for editor and preview
    const handleChange = (e) => { 
        const newText = e.target.value;
        // translate Github markdown into JSX
        const newTranslate = marked.parse(newText, { gfm:true, breaks:true });
        setText(newText);
        setTranslate(newTranslate);
    };

    //handle click event for editor
    const handleEditor = () => {
      setMaxEditor(!maxEditor);
    }

    //handle click event for preview
    const handlePreview = () => {
      setMaxPreview(!maxPreview);
    }
    
    return(
    <div className="App"> 
      {!maxPreview && <div className= "editorWrap" >
        <div className="toolBar">
            <FontAwesomeIcon icon={ faFreeCodeCamp } size="2x" className="fcc" /> 
            <h3> Editor </h3>
            {/* if editor window max,do not show maxArrow button */}
            {!maxEditor && <button className='maxArrow'  onClick={ handleEditor }>
                 <FontAwesomeIcon icon={ faMaximize } size="2x" />
            </button>}
            {/* if editor window not max,do not show minArrow button */}
            {maxEditor && <button className="minArrow" onClick={ handleEditor }>
                <FontAwesomeIcon icon={ faDownLeftAndUpRightToCenter } size="2x"/>
            </button>}
        </div>
        {/* if editor window max,update the size of textarea */}
        <textarea 
          name="editor" 
          id="editor" 
          rows="12" 
          value = { text } 
          onChange={ handleChange } className={maxEditor?"max":""}></textarea>
      </div>}
      
        {!maxEditor && <div id = 'preview'>
          <div className="toolBar">
            <FontAwesomeIcon icon={ faFreeCodeCamp } size="2x" className="fcc" /> 
            <h3> Preview </h3>
            {!maxPreview && <button className='maxArrow' onClick={ handlePreview }>
                 <FontAwesomeIcon icon={ faMaximize } size="2x"/>
            </button>}
            {maxPreview && <button className='minArrow'onClick={ handlePreview }>
                <FontAwesomeIcon icon={ faDownLeftAndUpRightToCenter } size="2x" />
            </button>}
          </div>
          <div dangerouslySetInnerHTML={{ __html: translate }} className={ `previewContent ${maxPreview?"max":""}` }/>
        </div>}           
    </div>  
    );
}
export default Editor;
