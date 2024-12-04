// const express = require("express");
import express from "express";
import { posts } from "./AllData/posts.js";
import { comments } from "./AllData/comments.js";
import { albums } from "./AllData/albums.js";
import { photos } from "./AllData/photos.js";
import { todos } from "./AllData/todos.js";
import { users } from "./AllData/users.js";

// Setup Express App

const app = express();

// Create Server

const PORT = 8050;
app.listen(PORT, ()=> {
    console.log(`Server Started ${PORT}`);
})

app.get('/', (req,res)=> {
    res.send(`<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; height: 90vh;"><h1>API By Aftab Ahmed</h1><a href="./posts">POSTS</a><br/><a href="./posts">COMMENTS</a><br/><a href="./posts">ALBUMS</a><br/><a href="./posts">PHOTOS</a><br/><a href="./posts">TODOS</a><br/><a href="./posts">USERS</a></div>`);
})

app.get('/posts', (req, res) => {
    res.status(200).send({status:true, AllPosts:posts})
})

app.get('/comments', (req, res)=> {
    res.status(200).send({status:true, AllComments:comments})
})

app.get('/albums', (req, res)=> {
    res.status(200).send({status:true, AllAlbums:albums})
})

app.get('/photos', (req, res)=> {
    res.status(200).send({status:true, AllPhotos:photos})
})

app.get('/todos', (req, res)=> {
    res.status(200).send({status:true, AllTodos:todos})
})

app.get('/users', (req, res)=> {
    res.status(200).send({status:true, AllUsers:users})
})