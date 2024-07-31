import React from "react";
import styles from "./home.module.css";

const Home = () => {

    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/btn">Btn</a></li>
            <li><a href="/todo">Todo</a></li>
            <li><a href="/coin">Coin</a></li>
            <li><a href="/movie">Movie</a></li>
        </ul>
    );
};

export default Home;