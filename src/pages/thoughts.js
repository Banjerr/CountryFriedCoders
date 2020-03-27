import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThoughtPost = props => (
  <article className="thought-post" id={props.post.node.id}>
    <h3>{props.post.node.title}</h3>
    <img src={props.post.node.image.fluid.srcWebp} />
    {documentToReactComponents(props.post.node.body.json, {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="h2">{children}</h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <img src={node.data.target.fields.file["en-us"].url} />
        )
      }
    })}
  </article>
)

const AllPastRecordedThoughts = ({ data }) => (
  <Layout>
    <SEO title="Home" />
      <section className="thought-container">
        {data.allContentfulThoughtPost.edges.map((post) => (
          <ThoughtPost post={post} key={post.node.id} />
        ))}
      </section>
  </Layout>
)

export const query = graphql`
  {
    allContentfulThoughtPost {
      edges {
        node {
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