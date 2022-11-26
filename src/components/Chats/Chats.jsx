import React from 'react';
import s from "./Chats.module.css";

import { NavLink, Route, Routes} from "react-router-dom";

import ChatBot from "./ChatBot/ChatBot";
import ChatMessage from "./ChatMessage/ChatMessage";

const Chats = () => {
    return <div >

        <div className={s.pos_chats}>
            <NavLink className={s.nav_link} to="/chats/chatbot">ChatBot</NavLink>
            <NavLink className={s.nav_link} to="/chats/chatmessage">ChatMessage</NavLink>
        </div>

        <Routes>
            <Route path="/chatbot" element={<ChatBot/>}/>
            <Route path="/chatmessage" element={<ChatMessage/>}/>
        </Routes>
    </div>

}
export default Chats;