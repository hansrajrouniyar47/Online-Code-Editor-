// Necessary imports as React, Use State, useEffect has been made here
import React, {useState, useEffect} from "react";
import CodeEditor from "./CodeEditor";

function App() {
  // declaring the states so as to take html,css,js code and output accordingly
  const [html,setHtml] =useState('')
  const [css,setCss] =useState('')
  const [js,setJs] =useState('')
  const [srcDoc,setSrcDoc]=useState('')
  const [file,setFile]=useState('')
  //using effect so that the changes on output screen take some miliseconds to appear 
  //and make appearance of rendered HTML not like hassle
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
   },300)
   return ()=> clearTimeout(timeout)
  }, [html,css,js])
 
  
  //function for handling html, css and js file and preview their editor on screen as per clicked
  const handleclick=(filetype)=> {
    setFile(filetype)
  }
  return (
    <>
    <div className="headersection">
      {/* //adding buttons for handling instructions, index.html, index.css, index.js */}
      <button type="button" className="button-class" onClick={()=>handleclick("")}>Instructions</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("html")}>Index.Html</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("css")}>Index.Css</button>
      <button type="button"  className="button-class" onClick={()=>handleclick("javascript")}>Index.Js</button>

    </div>
    <div className="pane top-pane">
      {/* //checking condition so as to let instructions section appear when clicked 
      //and when refreshed and not between other file sections */}
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
       
      // passing the html,css and js value as passed on by the user
      // and applying with onChange event
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
      
     {/* //div for passing OUTPUT section whenever one of 3 files appear */}
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
