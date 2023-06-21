import React from 'react';


const PostPage = async () => {

    const blog =  getData()

    return (
        <div>
            <img src={blog.imgurl} alt="" />
            <div>{blog.body}</div>
        </div>
    );
}

export default PostPage;
