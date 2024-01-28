import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            {/*  常に表示する部分 */}
            <Link to="/">Link to Home</Link>
            <br />
            <Link to="/mypage">Link to MyPage</Link>

            {/*  ルーティングする部分 */}
            <Router />
        </BrowserRouter>
    );
}

export default App;
