import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = () => {

    const classes = useStyles();

    
    return (
        <div>
            <h1>
                POSTS
            </h1>
            <Post>First Post</Post>
            <Post>Second Post</Post>
        </div>
    );
}

export default Posts;