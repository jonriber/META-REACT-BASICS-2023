import { useState } from "react"


const ControlledForm = () => {
    const [state,setState] = useState({
        name:"",
        age:0

    });

    function handleChange(e){
        console.log("event:",e.target.id);
        setState({...state,[e.target.id]:e.target.value})
    }
    return(
        <>
            <h3>Controlled Component</h3>
            <form>
                <input 
                    value={state.name}
                    onChange={handleChange}
                    type="text"
                    id="name"
                />
            </form>
        </>
    )
}

export default ControlledForm