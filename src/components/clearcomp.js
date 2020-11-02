import React from 'react'
import {connect} from 'react-redux'
import './clearcomp.css'
import {clearCompletedAll} from '../actions/index'
const mapStateToProps = state => {
 //console.log(state);
      return { all: state.all ,completed:state.completed,filter:state.filter};
      
    };

const Clear = (props)=>{

    return (<div className="clearComp" onClick={()=>{props.clearCompletedAll()}} >

        Clear completed
    </div>)


}

export default connect(mapStateToProps,{clearCompletedAll}) (Clear);