/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import Yace from 'yace'
import { highlight } from 'mdhl'

import './editorStyles.css'
import 'mdhl/mdhl.css'

export default function App({ initialValue, onChange }) {
  useEffect(() => {
    const editor = new Yace('#editor', {
      lineNumbers: true,
      value: initialValue,
      styles: {
        fontSize: '20px'
      },
      highlighter: highlight
    })

    editor.onUpdate(onChange)

    return () => {
      editor.root.innerHTML = ''
      editor.destroy()
    }
  }, []) // eslint-disable-line

  return (
    <div className="wrap editorWrap editorBody">
      <div id="editor" />
    </div>
  )
}
