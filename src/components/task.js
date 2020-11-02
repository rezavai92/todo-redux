import React,{useRef,createRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle}  from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import {connect} from 'react-redux'
import {completeTask,editTask,deleteTask} from '../actions/index'
import './task.css'
const mapStateToProps = state => {
    //console.log(state);
      return { all: state.all ,completed:state.completed,filter:state.filter};
      
    };
const Task = (props)=>{
    let checked =""
    const myRef =useRef(null);
    const myRefOne = useRef(null);
return (<div className="task">


<div className="completeButton">

<label className="container">
  <input type="checkbox" ref={myRefOne}   onChange={ ()=> {props.completeTask(props.id,myRefOne.current.checked );
    
    //myRef.current.style.textDecoration=myRefOne.current.checked?"line-through":'none';
   // myRefOne.current.checked= myRefOne.current.checked?true:false;
   
    //console.log("props.lt", props.lt)
    } } checked={props.lt ?true:false}  />


  <span className="checkmark"></span>
</label>



     </div>

    <div className="myDIV">

    <li className="list-group-item " contentEditable="true" style={props.lt?{textDecoration:'line-through'}:null }  ref={myRef} onInput ={(e)=>{props.editTask(props.id,e.target.innerText)}} 
  >
        

        {props.task}
    
    </li>
    </div>
    <div className="hide">
        <button onClick={()=>{props.deleteTask(props.id)}}>
          X
        </button>
    </div>
   
    
</div>)

}


export default connect( mapStateToProps,{completeTask,editTask,deleteTask}) ( Task);