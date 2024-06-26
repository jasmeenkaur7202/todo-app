import React, { useRef } from "react";
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleAdd(e);
    inputRef.current?.blur();
  }
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input 
        ref={inputRef}
        type="input" 
        placeholder="Enter a task" 
        className="input_box" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">Add Task</button>
    </form>
  )
};

export default InputField;