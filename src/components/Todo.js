import React from "react";

const Todo = ({ text, todo, todos, setTodos, setInputText, setEditing, setEditingTodoId }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };
    const editHandler = () => {
        setInputText(todo.text);
        document.getElementById("form").focus();
        setEditing(true);
        setEditingTodoId(todo.id);
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <div className="buttons">
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={editHandler} className="edit-btn">
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;
