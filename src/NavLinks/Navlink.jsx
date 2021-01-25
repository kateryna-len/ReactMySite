import React from "react";
import s from './navlink.module.css';

const Navlink = () => {
    return ( <nav className={s.nav}>
    <div className={s.item}>
    <Navlink to="/profile">Profile </Navlink>
    </div>
    <div  className={s.item}>
    <Navlink to="/dialogs">Messages</Navlink>
    </div>
  </nav>

    )
}

export default Navlink;