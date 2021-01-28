import React from "react";
import s from "./profileinfo.module.css";

const Profileinfo = () => {
    return (<div>
        <div className={s.container}>
      <img className={s.mainImg} src="https://static.vecteezy.com/system/resources/previews/001/402/321/non_2x/abstract-technologic-and-futuristic-background-free-vector.jpg" />
    </div>
    <div className={s.avatarBlock}>
    <img className={s.avatar} src="https://scontent.fdnk3-1.fna.fbcdn.net/v/t1.0-9/95376705_2595969480720917_1832940386637578240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=3HUGBjpIAgAAX9axX06&_nc_ht=scontent.fdnk3-1.fna&oh=623ce08e38b1ab5ffe2478c56bae3b9e&oe=60340D3D" />
    < div className={s.personalInfo}>
    <p>Kateryna Len</p>
    </div>
    </div>
    </div>)
}

export default Profileinfo;