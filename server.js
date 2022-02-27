const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./api/typeDefs");
const resolvers = require("./api/resolvers");
const PORT = 4000 || process.env.port;
const app = express();


const graphql_server = async () =>{
    const apollo = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apollo.start();
    apollo.applyMiddleware({app: app});
}

mongoose.connect("mongodb+srv://pathu:rucha@cluster0.vmyab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() =>{
        console.log("connected to mongodb");
    })

graphql_server();
app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`)
})