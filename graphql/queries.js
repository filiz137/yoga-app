import gql from 'graphql-tag';

export const allPosesQuery = gql`
query allPosesQuery {
  poses {
    data {
      id
      attributes {
        name
        level
        category
        tags
        description
        slug
      }
    }
  }
}
`

export const singlePoseQuery = gql`
query singlePoseQuery($id: ID!) {
  pose(id: $id) {
    data {
      id
      attributes {
        name
        level
        category
        description
        slug
        image {
          data {
            attributes {
              url
              formats
            }
          }
        }
      }
    }
  }
}
`
