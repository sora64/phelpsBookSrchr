import { gql } from "@apollo/client";

// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       savedBooks {
//         bookId
//         authors
//         title
//         description
//         image
//         link
//       }
//     }
//   }
// `;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
