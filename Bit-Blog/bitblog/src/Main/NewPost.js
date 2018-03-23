import React from 'react';

const NewPost = () => {
    return (

        <div className='container'>
            <div className = 'h1NP'><h1>New Post</h1></div>
            <p>Title</p>
            <input className='inputTitle' type="text" name="Title" id="" />
            <br />
            <br />
            <p>Content</p>
            <textarea className = 'textArea' name="" id="" cols="60" rows="30"></textarea>
            <br />
            <br />
            <br />
            <div className = 'buttons'><input className = 'cancel' type="button" value="Cancel"/>
            <input className = 'save' type="submit" value="Save"/></div></div>
    )


}

export default NewPost;