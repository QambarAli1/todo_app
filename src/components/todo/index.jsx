import React from 'react';
import Styles from './styles.module.scss'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

function Todo(props) {
  return (
    <div>
      <ul className={Styles.todoList}>
        {
          props.todolist.map((todo) => {
            return (
              <li key={todo.id}>
                <span> {todo.value} </span>
                <button> <AiFillEdit /> </button>
                <button> <AiFillDelete /> </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Todo
