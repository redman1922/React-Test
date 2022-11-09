import React from 'react';
import s from "./Header.module.css";

import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={s.top_header}>
    <div>
        <NavLink className={s.style_link} to="/profile">Profile</NavLink>
    </div>
    <div>
        <NavLink className={s.style_link} to="/chats">Chats</NavLink>
    </div>
    <div>
        <NavLink className={s.style_link} to="/">Home</NavLink>
    </div>
</div>
}

export default Header;