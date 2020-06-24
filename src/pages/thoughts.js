import React from 'react'
import { graphql } from 'gatsby'

import EditorWrapper from '../components/editorWrapper'
import SEO from '../components/seo'

import '../components/thoughtStyles.css'

const createPostString = (post) => {
  let postString = ''

  post.content.forEach(dataPieces => {
    dataPieces.content.forEach(content => {
      if (content.value.length) {
        postString += content.value + '\n'
      }
    })
  })

  return postString
}

const AllPastRecordedThoughts = ({ data }) => (
  <div>
    <SEO title="Home" />
    <section className="thought-container">
      {data.allContentfulThoughtPost.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.title}</h3>
          <h4>Written: {post.node.createdAt}</h4>
          <EditorWrapper post={createPostString(post.node.body.json)} />
        </div>
      ))}
    </section>
  </div>
)

export const query = graphql`
  {
    allContentfulThoughtPost {
      edges {
        node {
          createdAt
          title
          id
          image {
            description
            title
            fluid {
              srcWebp
            }
          }
          body {
            json
          }
        }
      }
    }
  }
`

export default AllPastRecordedThoughts
