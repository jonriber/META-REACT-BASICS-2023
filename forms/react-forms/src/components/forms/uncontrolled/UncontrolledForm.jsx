import { useRef } from "react";


const UncontrolledForm = () => {
    const inputRef = useRef(null);

    function handleSubmit(){
        console.log("handle Submit Function")
        const inputValue = inputRef.current.value
        console.log("inputValue:",inputValue);
    }
    return(
        <>
            <h1>Uncontrolled Component</h1>
            <p>Using input value stored in REAL DOM with useREF</p>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text"/>
            </form>
        </>
    )
}

export default UncontrolledForm;