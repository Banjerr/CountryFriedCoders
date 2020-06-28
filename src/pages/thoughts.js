import React from 'react'
import { graphql } from 'gatsby'

import EditorWrapper from '../components/editorWrapper'
import SEO from '../components/seo'

import '../components/thoughtStyles.css'

const createPostString = (post) => {
  let postString = ''

  post.content.forEach(dataPieces => {
    dataPieces.content.forEach(content => {
      postString += content.value + '\n'
    })
  })

  return postString
}

const AllPastRecordedThoughts = ({ data }) => (
  <div>
    <SEO title="Home" />
    <section className="thought-container">
      {data.allContentfulThoughtPost.edges.map(post => {
        const thisPostString = createPostString(post.node.body.json)
        return (
          <div key={post.node.id}>
            <h3>{post.node.title}</h3>
            <h4>Written: {post.node.createdAt}</h4>
            <EditorWrapper post={thisPostString} id={post.node.id} />
          </div>
        )
      })}
    </section>
  </div>
)

export const query = graphql`
  {
    allContentfulThoughtPost (sort: {fields: createdAt, order: DESC}) {
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
