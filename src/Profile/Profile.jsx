import React from "react";
import Mypost from "./Mypost/Mypost";
import s from './profiles.module.css';

const Profiles = () => {
    return ( <div>
    <div>
      <img className={s.mainImg} src="https://static.vecteezy.com/system/resources/previews/001/402/321/non_2x/abstract-technologic-and-futuristic-background-free-vector.jpg"></img>
      
    </div>
    <div>ava+description</div>
    <Mypost />
  </div>
    )
}

export default Profiles;