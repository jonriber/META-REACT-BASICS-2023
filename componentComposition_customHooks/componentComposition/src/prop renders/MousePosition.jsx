import { useEffect, useState } from "react"

const MousePosition = ({render}) => {

    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    });

    const handleMovement = (e) => {
        setMousePosition({
            x:e.clientX,
            y:e.clientY
        })
    }
    useEffect(() =>{
        document.addEventListener("mousemove",handleMovement)

        return() => document.removeEventListener("mousemove",handleMovement)
    },[])

    return render({mousePosition})
}

export default MousePosition;
