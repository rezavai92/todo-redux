import React from 'react'
import './filterbox.css'
const FilterBox =(props)=>{

return (<div className="filter-box">
 <button onClick={()=>{ props.click()} } > {props.text} </button>
    
</div>)

}


export default FilterBox;