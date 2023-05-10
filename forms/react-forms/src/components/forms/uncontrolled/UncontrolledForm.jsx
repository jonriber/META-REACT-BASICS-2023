import { useRef } from "react";


const UncontrolledForm = () => {
    const inputRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log("handle Submit Function")
        const inputValue = inputRef.current.value
        console.log("inputValue:",inputValue);
    }
    return(
        <>
            <h3>Uncontrolled Component</h3>
            <p>Using input value stored in REAL DOM with useREF</p>
            <form onSubmit={handleSubmit}>
                <fieldset style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"normal"}}>
                    <label>Input Text here:</label>
                    <input ref={inputRef} type="text"/>

                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UncontrolledForm;