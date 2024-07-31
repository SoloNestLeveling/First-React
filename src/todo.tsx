import React, { useEffect, useState } from "react";
import styles from "./todo.module.css";


const Todo = () => {

    const [value, setValue] = useState<string>("");
    const [todo, setTodo] = useState<string[]>([]);


    // 업로드시 투두 리스트 생성
    const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (value === "") {
            return
        }

        const newArray = setTodo([...todo, value]);
        setValue("");

        return newArray;
    };



    //인풋 벨류
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    const onDelet = (index: number) => {
        setTodo(todo.filter((_, i) => i !== index));
    }


    return (
        <div className={styles.mainBg}>

            <div className={styles.todoContainer}>

                <form className={styles.todoForm}>
                    <input onChange={onChange} value={value} type="text" />
                    <button onClick={addTodo}>업로드</button>
                </form>

                <div className={styles.todoBg}>
                    <div>
                        {todo.map((value, i) => <TodoItems key={i} text={value} onDelet={() => onDelet(i)} />)}
                    </div>
                </div>

            </div>
        </div>
    )

};

export interface TodoProps {
    text: string,
    onDelet: () => void,

}

const TodoItems: React.FC<TodoProps> = ({ text, onDelet }) => {

    return (
        <div className={styles.todoList}>
            <div className={styles.todoElement}>
                <span>{text}</span>
                <button type="button" onClick={onDelet}>삭제</button>
            </div>
        </div>
    )
}

export default Todo;