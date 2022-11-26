import './App.module.css';
import s from './App.module.css';

import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>

            <Header/>
            <div className={s.main_pos}>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/chats/*" element={<Chats/>}/>
                <Route path="/" />
                <Route path="*" element={<div>404 page</div>} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App;