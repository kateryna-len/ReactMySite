import React from "react";
import Mypost from "./Mypost/Mypost";
import Profileinfo from "./ProfileInfo/Profileinfo";
import s from './profiles.module.css';

const Profiles = () => {
    return ( <div className={s.profile}>
    <Profileinfo />
    <Mypost />
  </div>
    )
}

export default Profiles;