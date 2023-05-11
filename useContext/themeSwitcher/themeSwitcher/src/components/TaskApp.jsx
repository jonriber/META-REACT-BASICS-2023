import {useReducer, useState} from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import initialTasks from "../reducers/initialTasks"
import tasksReducer from "../reducers/tasksReducer"

const TaskApp = () =>{
    const [nextId,setNextId] = useState(3);
    const [tasks,dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    console.log("TASKS:",tasks);
    
    function handlerAddTask(e,text){
        e.preventDefault();
        console.log("ADD NEW TASK HANDLER!!!");
        setNextId((nextId) => nextId +1);
        dispatch({
            type: 'added',
            id: nextId,
            text: text,
        })
    }

    function handlerChangeTask(task){
        dispatch({
            type: "changed",
            task: task
        })
    }

    function handlerDeleteTask(id){
        dispatch({
            type: "deleted",
            id:id
        })
    }

    return(
        <>
            <h3>Task App Example</h3>
            <AddTask addTaskHandler={handlerAddTask}/>
            <TaskList tasks={tasks} changeTaskHandler={handlerChangeTask} deleteTaskHandler={handlerDeleteTask}/>
        </>
    )
}

export default TaskApp

