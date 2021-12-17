import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/actions";

function InputToDo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: title,
      status: 0,
      description: descriptions,
      createdAt: Date.now()
    }
    dispatch(addTodo(data));
    setTitle('');
    setDescriptions('');
  }

  const handleInput = e => {
    setTitle(e.target.value);
  }

  const handleInputDesc = e => {
    setDescriptions(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className='form-to-do'>

      <div className='todo-input-container'>
        <input
          type="text"
          value={title}
          onChange={handleInput}
          placeholder='To Do Title'
          className='input-to-do'
          required={true}
        />
        <input
          type="text"
          value={descriptions}
          onChange={handleInputDesc}
          placeholder='To Do Description'
          className='input-to-do'
          required={true}
        />
      </div>


      <button
        type="submit"
        disabled={!title}
        className='btn-to-do'>
        Add Todo</button>
    </form>
  )
}

export default InputToDo
