import { v4 as uuidv4 } from 'uuid';


export const createTask =(payload)=>{

return({
    type:"create",
    payload :{task:payload,isCompleted:false,id:uuidv4()}
})

}
export const editTask =(id,task)=>{
return ({

    type:"edit",
    payload:{id:id,task:task},
    
})

}
export const completeTask =(id,checked)=>{

    return(
        {
            type:"completed",
            id : id,
            checked :checked,
        }
    )
}
export  const deleteTask = (id)=>{

    return(
        {
            id:id,
            type: "delete"
        }
    )
}
export const displayComplete =()=>{

    return (
        {
            type : "displayComplete",
            
        }
    )
}

export const displayActive =()=>{

    return (
        {
            type : "displayActive",
            
        }
    )
}

export const displayAll =()=>{

    return (
        {
            type : "displayAll",
            
        }
    )
}

export const clearCompletedAll=()=>{

    return(
        {
            type:'clearCompletedAll'
        }
    )
}


