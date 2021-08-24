import React from 'react'
import { Form, ListGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { deleteTodo, toggleTodo, editTodo } from '../Redux/Actions/todoActions'
import './Todo.css'
import { AiFillEdit } from "react-icons/ai";
import { AiFillCloseCircle} from "react-icons/ai";


function Todo({ todo }) {
    const dispatch = useDispatch()
    const [newTodoDesc, setNewTodoDesc] = useState(todo.newTodo);
    const [editable, setEditable] = useState(false);


    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleEditTodo = () => {
        dispatch(editTodo({ ...todo, newTodo: newTodoDesc }))
        if (editable) {
            setNewTodoDesc(todo.newTodoDesc);
        }
        setEditable(!editable);

    }


    return (
       
        <>
            <div>
                {editable ?
                    <input
                        type="text"
                        value={newTodoDesc}
                        onChange={(e) => {
                            setNewTodoDesc(e.target.value);
                        }}

                    />
                    :
                    <>{todo.newTodoDesc}</>}
            </div>
            <ListGroup.Item className="todo" >
                {todo.newTodo}
                <Form.Check checked={todo.isDone} onClick={() => dispatch(toggleTodo(todo.id))}></Form.Check>
                <Button variant="outline-info" onClick={handleEditTodo}><AiFillEdit/></Button>
                <Button variant="outline-danger" onClick={handleDeleteTodo}><AiFillCloseCircle /></Button>
            </ListGroup.Item>
        </>
    )
}

export default Todo