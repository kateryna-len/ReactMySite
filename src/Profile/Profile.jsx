import React from "react";
import Mypost from "./Mypost/Mypost";
import Profileinfo from "./ProfileInfo/Profileinfo";
import s from './profiles.module.css';

const Profiles = (props) => {
  
    return ( <div className={s.profile}>
    <Profileinfo />
    <Mypost postData={props.state.postData}
    addPost={props.addPost}
     />
  </div>
    )
}

export default Profiles;