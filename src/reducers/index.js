import {combineReducers} from 'redux'
import task from '../components/task';


let completedTask=[];
let activeTask =[];
const allTasksReducer =(tasks=[],action)=>{


if(action.type==='edit'){
    let index=null;
    let editedTask=action.payload;
    tasks.forEach((t)=>{if(action.payload.id===t.id){

        index = tasks.indexOf(t);
        editedTask.isCompleted=t.isCompleted;
    }})
    
   tasks.splice(index,1, editedTask );
    console.log("from edit reducer",tasks)

}   
if(action.type==='create'){
    console.log("from create reducer ",tasks);
    //tasks.push(action.payload);
    //activeTask= tasks.filter((task)=>{return !task.isCompleted});
    activeTask.push(action.payload);
    let payload = action.payload;
    
    return [...tasks,payload]
}
if(action.type==='delete'){

    let index=null;

    tasks.forEach((t)=>{if(t.id===action.id){index=tasks.indexOf(t)}});

    tasks.splice(index,1);
    return [...tasks]
}

if(action.type==='clearCompletedAll'){

    tasks =tasks.filter((t)=>{return !t.isCompleted});

    
}

if (action.type==='completed' ){

//console.log("from completed reducer",tasks[action.id],action.id,tasks )
   if(action.checked){

    tasks.forEach((t)=>{if(t.id===action.id){t.isCompleted=true}})
    //tasks[action.id].isCompleted=true;
    completedTask= tasks.filter((task)=>{return task.isCompleted});
    activeTask= tasks.filter((task)=>{return !task.isCompleted});
 

   // console.log("action.checked[true]",action.id,tasks[action.id])
   }
   else{
    //tasks[action.id].isCompleted=false;
    tasks.forEach((t)=>{if(t.id===action.id){t.isCompleted=false}})
    completedTask= tasks.filter((task)=>{return task.isCompleted});
    activeTask= tasks.filter((task)=>{return !task.isCompleted});
 

   }

   //console.log("action.checked",action.checked);
   return [...tasks];
}



 if(action.type==="displayComplete"){

   completedTask= tasks.filter((task)=>{return task.isCompleted});


 }
if(action.type==="displayActive"){

    activeTask= tasks.filter((task)=>{return !task.isCompleted});
 
 
 }



return tasks;

}

const completedTaskReducer =(completed=[],action)=>{


    if(action.type==='clearCompletedAll'){

        completedTask.splice(0,completedTask.length);
        return completedTask;

    }

    if(action.type==='completed'){

        return [...completedTask]
    }
    if(action.type==='delete'){

        let index= null ;
     
        completedTask.forEach((t)=>{if(t.id===action.id){
          //  console.log("deleted task in completed task",t);
            index=completedTask.indexOf(t)}});

            if(index!=null){
                completedTask.splice(index,1);

            }

        
        return [...completedTask]
    }
    if (action.type==="displayComplete"  ){ 

      //  console.log("from completed Task reducer")
         return [...completedTask]

    }
    return completed;
}


const activeTaskReducer =(active=[],action)=>{


    if(action.type==='create'){

        return [...activeTask]
    }
    if(action.type==='completed'){
        return [...activeTask]

    }
    
   if(action.type==='delete'){
    let index= null ;
     
    activeTask.forEach((t)=>{if(t.id===action.id){index=activeTask.indexOf(t)}});
    activeTask.splice(index,1);

    return [...activeTask]
   }
    if (action.type==="displayActive"  ){ 

       // console.log("from active Task reducer")
    return [...activeTask];

    }
    return active;
}



const currentFilterReducer = (current="all",action)=>{

    if(action.type==='displayAll'){

        current ="all";
        return current;
    }
    if(action.type ==='displayActive'){

        current = "active";
        return current;
    }
    if(action.type ==='displayComplete'){

        current = "completed";
        return current;
    }

    return current;
}





export default combineReducers({all:allTasksReducer,filter:currentFilterReducer,completed:completedTaskReducer ,active:activeTaskReducer })

