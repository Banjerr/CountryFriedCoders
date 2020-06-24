import React, { useState, useEffect } from 'react'

import Editor from '../components/editor'

export default function EditorWrapper ({ post }) {
  const [value, setValue] = useState('')

  useEffect(() => {
  }, [value])

  return (
    <div>
      <Editor
        initialValue={post}
        onChange={value => setValue(value)}
      />
    </div>
  )
}
