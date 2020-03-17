import React from "react"
import { graphql } from "gatsby"

const AllPastRecordedThoughts = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    contentfulThoughtPost {
      childContentfulThoughtPostBodyRichTextNode {
        body
      }
      title
      updatedAt
    }
  }
`

export default AllPastRecordedThoughts