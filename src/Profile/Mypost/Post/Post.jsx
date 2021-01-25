import React from "react";
import s from './post.module.css';

const Post = (props) => {
    return ( <div className={s.item}>
        <img className={s.photo} src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <span>{props.text}</span>
        <p>Like {props.account}</p>
    </div>
    

    )
}

export default Post;