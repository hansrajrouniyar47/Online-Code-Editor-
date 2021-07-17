//making all necessary imports like React, useState, codemirror and controlled
import React, {useState} from 'react'
//importing codemirror's necessary imports so as to to work with html,css and js
// and do the lazy loading for the syntax higlights, themes firing codemirror events
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlEditorSection } from 'react-codemirror2'

export default function Editor(props) {
  // declaring the set of props
  const {
    language,
    displayName,
    value,
    onChange
  } = props
   
  // function handling the change with codes of particular files
  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editorsection-container `}>
    
      <div className="titlesection">
        {displayName}
        
      </div>
      {/* editor sections for appearance as soon as particular file is clicked:index.html, index.css, index.js */}
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