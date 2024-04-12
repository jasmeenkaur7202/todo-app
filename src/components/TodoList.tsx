import React from "react";
import './styles.css';
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  console.log(todos, 'todos');
  console.log(completedTodos, 'completed todos');
  
  
  return <div className="container">
    <Droppable droppableId="TodosList">
      {(provided, snapshot) => (
        <div 
          className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} 
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
          <span className="todos_heading">Active Tasks</span>
          {todos.map((todo, index) => (
            <SingleTodo 
              index={index}
              todo={todo} 
              key={todo.id} 
              todos={todos} 
              setTodos={setTodos} 
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    <Droppable droppableId="TodosRemove">
      {(provided, snapshot) => (
        <div className={`todos ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`} >
          <span className="todos_heading" ref={provided.innerRef} {...provided.droppableProps}>Completed Tasks</span>
          {completedTodos.map((todo, index) => (
            <SingleTodo
              index={index} 
              todo={todo} 
              key={todo.id} 
              todos={completedTodos} 
              setTodos={setCompletedTodos} 
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>

  </div>
};

export default TodoList;