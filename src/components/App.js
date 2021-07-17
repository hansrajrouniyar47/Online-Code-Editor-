import React, {useState, useEffect} from "react";
import CodeEditor from "./CodeEditor";

function App() {
  const [html,setHtml] =useState('')
  const [css,setCss] =useState('')
  const [js,setJs] =useState('')
  const [srcDoc,setSrcDoc]=useState('')
  const [file,setFile]=useState('')
  useEffect(() => {
   const timeout=setTimeout(()=>{
    setSrcDoc(
      `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
   },250)
   return ()=> clearTimeout(timeout)
  }, [html,css,js])
 
  

  const handleclick=(filetype)=> {
    setFile(filetype)
  }
  return (
    <>
    <div className="headersection">
      <button type="button" className="button-class" onClick={()=>handleclick("")}>Instructions</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("html")}>Index.Html</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("css")}>Index.Css</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("javascript")}>Index.Js</button>

    </div>
    

    
    <div className="pane top-pane">
      {file=="" && <>
      <div className="instructions-style">
      <h1 style={{textAlign:"center"}}>Welcome to the Dyte Online Code Editor! </h1>
       
      <div>
        <h3>You can play with the html,css and js code online simultaneously.</h3>
           <h3> All the changes will be reflected at the bottom without need of refreshing  the page.</h3>
            <h3>Navigate through index.html button for html editor, index.css button for css editor and index.js button for javascript editor.</h3>
      </div>
      </div>

      </>
       
      
      }
      {file=="html" && 
      <CodeEditor 
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />}
      
      {file=="css" && 
      <CodeEditor 
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
      />}
       {file=="javascript" && 
      <CodeEditor 
        language="javascript"
        displayName="JavaScript"
        value={js}
        onChange={setJs}
      />}

    </div>
    {file && <> <div style={{backgroundColor:"#263238",color:"white",height:"3vh", paddingLeft:"20px",paddingTop:"5px"}}>OUTPUT</div>
   
    <div className="pane bottom-pane">
    
      <iframe
           
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      
      />
    </div>
    </> }
    </>
   
  );
}

export default App;
