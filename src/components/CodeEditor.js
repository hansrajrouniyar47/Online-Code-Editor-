import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlEditorSection } from 'react-codemirror2'



export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
   const [open,setOpen]=useState(false)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editorsection-container ${open ? '' :'collapsed' }`}>
    
      <div className="titlesection">
        {displayName}
        
      </div>
      <ControlEditorSection
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: 'material',
          mode: language,
        
          lineNumbers: true
        }}
      />
    </div>
  )
}