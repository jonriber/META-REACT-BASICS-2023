import Task from "./Task"


const TaskList = () => {

    return(
        <>
            <ul>
                <li><Task name={"Tarefa 1"}/></li>
                <li><Task name={"Tarefa 2"}/></li>
                <li><Task name={"Tarefa 3"}/></li>
            </ul>
        </>
    )
}

export default TaskList