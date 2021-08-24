import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import TodoList from './component/TodoList'
import { addTodo, changeTodo } from './Redux/Actions/todoActions'
import { IconButton, AddIcon, Pane, TextInput } from 'evergreen-ui'
import Header from './component/Header/header';

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [enabledButton, setEnabledButton] = useState(false)
  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTodo(e.target.value)
    setEnabledButton(e.target.value ? true : false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo && dispatch(addTodo(newTodo))
    setNewTodo("")
  }


  return (
    
    <div className="App" >
<Header/>

    <Form className="input" onSubmit={handleSubmit}>
        <FormControl
          type="text"
          name="todo"
          value={newTodo}
          placeholder="Please enter your todo..."
          onChange={handleChange}
        >
        </FormControl>
        <Button variant="dark" disabled={!enabledButton} style={{ height: 40, width: 100, marginTop:30 , marginLeft:20 ,   borderRadius: 15 }} type="submit" onClick={addTodo}>
          ADD
        </Button>
      </Form>
      <TodoList todos={filter === "All" ? todos : todos.filter(todo => todo.isDone === filter)} ></TodoList>

      <ButtonGroup style={{  alignItems: 'center' }} aria-label="Basic example"  vertical>
        <Button style={{ width: 100, margin: 10, borderRadius: "20px" }} variant="outline-warning" onClick={() => dispatch(changeTodo("All"))}>All</Button>
        <Button style={{ width: 100, margin: 10, borderRadius: "20px" }} variant="outline-success" onClick={() => dispatch(changeTodo(true))}>Done</Button>
        <Button style={{ width: 100, margin: 10, borderRadius: "20px" }} variant="outline-dark" onClick={() => dispatch(changeTodo(false))}>Undone</Button>
      </ButtonGroup>



    </div>
  );
}

export default App;