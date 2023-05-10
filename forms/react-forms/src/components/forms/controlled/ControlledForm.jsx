import { useState } from "react"

const initialState= {
    name:"",
    age:0,
    rate:10,
    comment:""
}

const ControlledForm = () => {
    const [state,setState] = useState(initialState);

    function handleChange(e){
        console.log("event:",e.target.id);
        setState({...state,[e.target.id]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("handle Submit");
        setState(initialState)
    }
    return(
        <>
            <h3>Controlled Component</h3>
            <form onSubmit={handleSubmit}>
                <fieldset style={{display:"flex",flexDirection:"column",borderRadius:"3px"}}>
                    <label>Name</label>
                    <input 
                        value={state.name}
                        onChange={handleChange}
                        type="text"
                        id="name"
                    />
                    <label>Age</label>
                    <input 
                        value={state.age}
                        onChange={handleChange}
                        type="number"
                        id="age"
                    />
                    <label>Rating: {state.rate}</label>
                    <input 
                        value={state.rate}
                        onChange={handleChange}
                        type="range"
                        id="rate"
                        min={0}
                        max={10}
                    />
                    <label>Comments</label>
                    <textarea
                        style={{minHeight:"100px"}}
                        value={state.comment}
                        onChange={handleChange}
                        id="comment"
                    />
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ControlledForm