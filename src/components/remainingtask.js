import React from 'react'
import {connect} from 'react-redux'
import './remaining.css'

const mapStateToProps = state => {
    //console.log(state);
      return { all: state.all ,completed:state.completed,filter:state.filter};
      
    };
const Remaining = (props)=>{

    return (<div className="remaining">

        {props.all.length-props.completed.length} item{(props.all.length-props.completed.length)>1?'s':''} left
    </div>)


}

export default connect(mapStateToProps) (Remaining);