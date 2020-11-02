import React from 'react'

import {connect} from 'react-redux'
import {createTask} from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown}  from '@fortawesome/free-solid-svg-icons'
import './taskcreation.css'
const mapStateToProps = state => {
 // console.log(state.all)
    return { all: state.all };
    
  };
  
const TaskCreator = (props)=>{

   
     
return (<div className="taskCreation">



  

 {props.all.length>0?<div className="down" >  
 <FontAwesomeIcon color="silver" icon={faChevronDown} />
 </div> :null
  }


  <input  placeholder= "what needs to be done" className="input" onKeyUp={(e)=>{if(e.keyCode===13){ e.preventDefault();
     
     let regex = /^\s*$/;
     if(regex.test(e.target.value)){
      alert("empty task");
     }
     else { 
      props.createTask(e.target.value);
      e.target.value="";
     }
    
     } }} type="text"  />
  


</div>)

}



export default connect(mapStateToProps,{createTask})(TaskCreator); 