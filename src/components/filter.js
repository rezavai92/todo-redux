import React from 'react'
import Remaining from './remainingtask'
import Clear from './clearcomp'
import FilterBox from './filterbox'

import './filter.css'
import {connect} from 'react-redux'
import {displayComplete,displayActive,displayAll} from '../actions/index'

const mapStateToProps = state => {
    //console.log(state);
      return { all: state.all ,completed:state.completed};
      
    };


const Filter =(props)=>{

return (<div className="filter" >

    {props.all.length>0?<Remaining></Remaining>:null}
    <div className="filterbox-single-flex">
    <FilterBox click={props.displayActive} text="active" ></FilterBox>
    <FilterBox click={props.displayAll}   text="all"></FilterBox>
    <FilterBox click ={props.displayComplete} text="completed"> </FilterBox>
    </div>
    {props.completed.length>0?<Clear></Clear>:null}
</div>)

}


export default connect(mapStateToProps,{displayComplete,displayActive,displayAll} )(Filter);