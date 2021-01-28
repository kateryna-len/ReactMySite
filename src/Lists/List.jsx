import React from "react";
import { NavLink } from "react-router-dom";
import s from './list.module.css';


const List = () => {
    return ( <nav className={s.nav}>
    <div className={s.item}>
    <NavLink to="/profile" activeClassName={s.active}>Profile </NavLink>
    </div>
    <div  className={s.item}>
    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
    
  </nav>

    )
}

export default List;