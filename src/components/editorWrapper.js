import React, { useState, useEffect } from 'react'

import Editor from '../components/editor'

export default function EditorWrapper ({ post, id }) {
  const [value, setValue] = useState('')
  console.log('post is ', post)
  useEffect(() => {
  }, [value])

  return (
    <div>
      <Editor
        initialValue={post}
        idKey={id}
        onChange={value => setValue(value)}
      />
    </div>
  )
}
