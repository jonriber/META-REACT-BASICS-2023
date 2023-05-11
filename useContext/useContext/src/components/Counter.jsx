import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const list = useMealsListContext();
    console.log("List on COUNTER:",list)
    return(
        <>
            <h1>Counter</h1>
            {list}
        </>
    )
    
};

export default Counter