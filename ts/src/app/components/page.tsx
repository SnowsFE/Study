"use client";
import React, { useState } from "react";

const Home: React.FC = () => {
  // 할 일 목록을 상태로 관리합니다.
  const [todos, setTodos] = useState<string[]>([]);
  // 새로운 할 일을 입력하는 상태를 관리합니다.
  const [newTodo, setNewTodo] = useState<string>("");

  // 새로운 할 일을 추가하는 함수입니다.
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // 할 일을 삭제하는 함수입니다.
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="할 일을 입력하세요..."
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
