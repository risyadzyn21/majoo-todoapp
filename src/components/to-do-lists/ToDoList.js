import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodosAsync, toggleTodo } from "../../redux/actions/actions";
import Modal from '../modals/ModalDetail'
import * as AiIcons from 'react-icons/ai'


const TodoList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todo, setTodo] = useState()
  const dispatch = useDispatch()
  const { todos, isLoading } = useSelector(
    (state) => state.todoReducer
  );

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [])

  const dataModal = (todo) => {
    setModalOpen(true)
    setTodo(todo)
  }


  return (
    <div className='todo-container'>
      {isLoading ? (<h1>Loading</h1>) : ''}
      <h2>Uncompleted</h2>
      {todos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))?.map((todo) => {
        return !todo.status ? (
          <div key={`todo-${todo.id}`} className='todo-item uncomplete'>
            <div className='todo-content'>
              <input
                type='checkbox'
                onChange={() => dispatch(toggleTodo(todo.id))}
                checked={todo.status}
              />
              <div onClick={() => {
                dataModal(todo);
              }}>
                <div className='todo-title'>{todo.title}</div>
                <div className='todo-desc'>{todo.description}</div>
              </div>
              <div className='icon-container'>
                <div className='icon-item edit' onClick={() => {
                  dataModal(todo);
                }}><AiIcons.AiFillEdit /></div>
                <div className='icon-item delete' onClick={() => dispatch(deleteTodo(todo.id))}><AiIcons.AiFillDelete /></div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )
      })}

      <h2>Completed</h2>
      {todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))?.map((todo) => {
        return todo.status ? (
          <div key={`todo-${todo.id}`} className='todo-item complete'>
            <div className='todo-content'>
              <input
                type='checkbox'
                onChange={() => dispatch(toggleTodo(todo.id))}
                checked={todo.status}
              />
              <div onClick={() => {
                dataModal(todo);
              }}>
                <div className='todo-title'>{todo.title}</div>
                <div className='todo-desc'>{todo.description}</div>
              </div>
              <div className='icon-container'>
                <div className='icon-item edit' onClick={() => {
                  dataModal(todo);
                }}><AiIcons.AiFillEdit /></div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )
      })}

      {modalOpen && <Modal setOpenModal={setModalOpen} todo={todo} />}

    </div>
  )
}

export default TodoList