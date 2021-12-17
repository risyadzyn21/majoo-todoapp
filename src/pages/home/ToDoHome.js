
import InputToDo from "../../components/inputs/InputToDo"
import TodoList from "../../components/to-do-lists/ToDoList"
import majooLogo from '../../assets/majoo_logo_icon_2.png'

function ToDoHome() {
  return (
    <div className="home">
      <img src={majooLogo} alt='majoo logo' />
      <div className='home-container'>
        <h1 className='big-title'>To Do App</h1>
        <InputToDo />
        <TodoList />
      </div>
    </div>

  )
}

export default ToDoHome
