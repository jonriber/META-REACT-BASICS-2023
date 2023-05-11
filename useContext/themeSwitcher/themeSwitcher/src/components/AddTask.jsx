/* eslint-disable react/prop-types */
import {useRef} from "react"

function AddTask({addTaskHandler}){
    const inputRef = useRef("");

    return(
        <>
            <form onSubmit={(e) => addTaskHandler(e,inputRef.current)}>
                <fieldset>
                    <label>Adicionar Tarefa</label>
                    <input ref={inputRef} type="text" placeholder="Nova Tarefa"/>
                    <button type="submit">Adicionar</button>
                </fieldset>
            </form>
        </>
    )
}

export default AddTask;