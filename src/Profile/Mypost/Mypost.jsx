import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = () => {
    return ( <div>
        My post
        <div>
        <textarea></textarea>
        <button>Add</button>
    </div>
        <div className={s.posts}>
        <Post text="I said May" account="23" />
        <Post text="How are you ancestor!" account="12" />
        </div>
    </div>

    )
}

export default Mypost;