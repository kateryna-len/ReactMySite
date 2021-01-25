import React from "react";
import s from './header.module.css';

const Header = () => {
    return ( <header className={s.header}>
    <div className={s.logo}><p>BOOK<span>AsK</span></p></div>
    </header>
    

    )
}

export default Header;