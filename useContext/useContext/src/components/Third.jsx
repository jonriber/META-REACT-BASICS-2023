import { useMealsListContext } from "../providers/MealsProvider"

const Third = () => {
    const list = useMealsListContext()
    console.log("list on THIR:",list)
    return (
        <>
            <h1>THIRD COMPONENT</h1>
            {list}
        </>
    )
}

export default Third