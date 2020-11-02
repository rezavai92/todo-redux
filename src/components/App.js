import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import TaskCreation from './taskCreation'
import TaskList from './tasklist.js'
import './myapp.css'
import Filter from './filter'
const App = ()=>{

return (<div>
  <h1 className="todo" >todos</h1>
  <TaskCreation></TaskCreation>
  <TaskList></TaskList>
  
</div>)
}
export default App