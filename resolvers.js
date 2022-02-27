const mongoose = require("mongoose");
const Post = require("../models/Post.model")
const resolvers = {
    Query: {
        getPosts: async () =>{
            const posts = await Post.find();
            return posts;
        },
        getPostById: async (parent, args, context, info) =>{
            const {id} = args;
            const post = await Post.findById(id);
            return post;
        }
    },
    Mutation: {
        sendPost: async (parent, args, context, info) =>{
            const {title, name, description} = args.post;
            const post = new Post({title, name, description});
            await post.save();
            return post;
        },
        deletePost: async (parent, args, context, info) =>{
            const {id} = args;
            const post = await Post.findByIdAndDelete(id);
            return "Post is deleted"
        },
        updatePost: async (parent, args, context, info) =>{
            const {id} = args;
            const {title, name, description} = args.post;
            const updates = {};
            if(name !== undefined){
                updates.name = name;
            }
            if(title !== undefined){
                updates.title = title;
            }
            if(description !== undefined){
                updates.description = description;
            }
            const post= await Post.findByIdAndUpdate(id, updates, {new: true});
            return post;
        }
    }
}

module.exports = resolvers;