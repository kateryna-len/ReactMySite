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
    <div  className={s.item}>
    <NavLink to="/dialogs" activeClassName={s.active}>News</NavLink>
    </div>
    <div  className={s.item}>
    <NavLink to="/dialogs" activeClassName={s.active}>Music</NavLink>
    </div>
    <div  className={s.item}>
    <NavLink to="/dialogs" activeClassName={s.active}>Settings</NavLink>
    </div>
   
    
  </nav>

    )
}

export default List;