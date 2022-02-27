const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Post{
        id: ID
        title: String
        name: String
        description: String
        date: String
    }
    type Query{
        getPosts: [Post]
        getPostById(id:ID): Post
    }
    input PostInput{
        title: String
        name: String
        description: String
    }
    type Mutation{
        sendPost(post: PostInput): Post
        deletePost(id: ID): String
        updatePost(id: ID, post: PostInput): Post
    }
`

module.exports = typeDefs;

