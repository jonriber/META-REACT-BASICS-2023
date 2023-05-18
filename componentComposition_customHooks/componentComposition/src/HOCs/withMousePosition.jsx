/* eslint-disable react/display-name */
import { useEffect, useState } from "react"

const withMousePosition = (BaseComponent) => { //recebo um componente como argumento, poderia ter outros argumentos

    return ((props) => { //retorno da função withMouseposition, que retoma uma nova função não nomeada

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