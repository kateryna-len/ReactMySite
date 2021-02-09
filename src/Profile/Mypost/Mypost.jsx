import React from "react";
import { addPostActionCreate, upDatePostActionCreate } from "../../Redux/State";
import s from "./Mypost.module.css";
import Post from "./Post/Post";



const Mypost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch( addPostActionCreate());
    }
    let changetext = () => {
        let text = newPostElement.current.value;
        let action = upDatePostActionCreate(text);
        props.dispatch(action);
        
    }
    
    return ( <div>
        My post
        <div>
        <textarea onChange={changetext} ref ={ newPostElement } value={props.newPost} ></textarea>
        <button onClick={ addPost } >Add</button>
    </div>
        <div className={s.posts}>
        {props.postData.map(Post)}
        
        </div>
    </div>

    )
}

export default Mypost;