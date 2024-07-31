import React, { useState } from "react";
import styles from "./button.module.css";

const Btn: React.FC = () => {

    const [number, setNumber] = useState<number>(0);

    const onClickPlus = () => {
        setNumber((number) => number + 1);
    }

    const onClickMinus = () => {
        setNumber((number) => number === 0 ? number : number - 1);
    }

    return (
        <div className={styles.mainContainer}>
            <button onClick={onClickPlus} className={styles.btn} type="button">+</button>
            <span>{number}</span>
            <button onClick={onClickMinus} className={styles.btnMinus} type="button">-</button>
        </div>
    )
}

export default Btn;