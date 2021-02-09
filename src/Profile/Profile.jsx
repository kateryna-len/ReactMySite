import React from "react";
import Mypost from "./Mypost/Mypost";
import Profileinfo from "./ProfileInfo/Profileinfo";
import s from './profiles.module.css';

const Profiles = (props) => {
  
    return ( <div className={s.profile}>
    <Profileinfo />
    <Mypost postData={props.profileState.postData}
    newPost={props.profileState.newPost}
    dispatch={props.dispatch}
     />
  </div>
    )
}

export default Profiles;