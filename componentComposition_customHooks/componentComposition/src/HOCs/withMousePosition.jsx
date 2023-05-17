/* eslint-disable react/display-name */
import { useEffect, useState } from "react"

const withMousePosition = (BaseComponent) => {

    return ((props) => {

        const [mousePosition,setMousePosition] = useState({
            x:0,
            y:0
        })

    
        useEffect(() =>{

            const handleMouseMovement = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }

            window.addEventListener("mousemove",handleMouseMovement)

            return() => {
                window.removeEventListener("mousemove",handleMouseMovement) //unsubscribe from event listener of mouse movement
            }

        },[])

        return <BaseComponent {...props} mousePosition={mousePosition}/>
    })
}

export default withMousePosition