

function AddTask(){
    return(
        <>
            <form>
                <fieldset>
                    <label>Adicionar Tarefa</label>
                    <input type="text" placeholder="Nova Tarefa"/>
                    <button type="submit">Adicionar</button>
                </fieldset>
            </form>
        </>
    )
}

export default AddTask;