import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value=' ';
    }
    
    return ( <div>
        My post
        <div>
        <textarea ref ={ newPostElement } ></textarea>
        <button onClick={ addPost } >Add</button>
    </div>
        <div className={s.posts}>
        {props.postData.map(Post)}
        
        </div>
    </div>

    )
}

export default Mypost;