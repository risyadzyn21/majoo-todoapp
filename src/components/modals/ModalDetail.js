import { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from 'date-fns'
import { deleteTodo, editTodo } from "../../redux/actions/actions";

function Modal({ setOpenModal, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('')


  const handleSubmit = e => {
    e.preventDefault();
    setOpenModal(false)
    const data = {
      id: todo.id,
      title: title,
      status: todo.status,
      description: descriptions,
      createdAt: todo.createdAt
    }
    dispatch(editTodo(data));
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
    <div className="modalBackground"
      onClick={() => {
        setOpenModal(false);
      }}>
      <div className="modalContainer"
        onClick={e => {
          e.stopPropagation();
        }}>
        <form onSubmit={handleSubmit} className='edit-modal-form'>
          <input
            type="text"
            value={title}
            onChange={handleInput}
            placeholder={todo.title}
            className='input-to-do'
            required={true}
          />
          <input
            type="text"
            value={descriptions}
            onChange={handleInputDesc}
            placeholder={todo.description}
            className='input-to-do'
            required={true}
          />

          <div className="footer">
            <button type='submit'>Edit</button>
            {todo.status === 0 ? (
              <button
                onClick={() => {
                  dispatch(deleteTodo(todo.id))
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Delete
              </button>
            ) : ''}

          </div>
        </form>

        <div>{format(new Date(todo.createdAt), 'yyyy MMM dd - kk:mm')}</div>
      </div>
    </div>
  );
}

export default Modal;