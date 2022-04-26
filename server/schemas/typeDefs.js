const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type: User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type: Book {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
        book: Book
    }

    type Query {
        me: User
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(userId: ID!, body: String!): User
        deleteBook(_id: ID!): User
    }
`;

module.exports = typeDefs;
