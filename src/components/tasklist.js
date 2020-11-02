import React from 'react'
import Task from './task.js'
import './tasklist.css'
import Filter from './filter'
import {connect} from 'react-redux'

import {completeTask} from '../actions/index'


const mapStateToProps = state => {
 // console.log(state.all)
    return { all: state.all,completed:state.completed,active:state.active,filter:state.filter };
    
  };
const TaskList = (props)=>{


let mappedTasks=null;



 const mappedAllTasks = props.all.map((task,index)=>{return <Task lt={task.isCompleted?true:false}  task={task.task} key={index} id={task.id} ></Task>})   ;


 const mappedCompletedTasks = props.completed.map((task,index)=>{return <Task  task={task.task}   check={task.isCompleted?true:false} lt={task.isCompleted?true:false} key={index} id={task.id} ></Task>})   ;

 const mappedActiveTasks = props.active.map((task,index)=>{return <Task  task={task.task}  lt={task.isCompleted?true:false} key={index} id={task.id} ></Task>})   ;



 if(props.filter==='all'){

    mappedTasks= mappedAllTasks;
}

else if (props.filter==='completed'){

    mappedTasks= mappedCompletedTasks;
    
}

else if (props.filter==='active'){

    mappedTasks= mappedActiveTasks;
    
}


return (<div>


<ul className="tasklist-flex list-group">
  {mappedTasks}
  
  {props.all.length>0?<Filter></Filter>:null} 
</ul>
    
</div>)

}


export default connect(mapStateToProps,{completeTask}) (TaskList);