import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Todo from './Todo'
import './Todo.css'
function TodoList({ todos }) {
    return (
        <>
            <ListGroup>
                {todos.length>0 ? todos.map((todo, index) => <Todo key={index} todo={todo}></Todo>): 
               
                  <div class="text-box">
                  <h1 class="heading-primary">
                   <span class="heading-primary-main">The List</span>
                    <span class="heading-primary-sub">is empty!</span>
                   </h1>
             </div>
                 }
            </ListGroup>
        </>
    )
}

export default TodoList