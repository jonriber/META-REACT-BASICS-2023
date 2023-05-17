/* eslint-disable react/prop-types */
import { Children, cloneElement } from "react"

//run time, dinâmico
const RadioGroup = ({onChange,selected,children}) => {

    const radioOptions = Children.map(children,(child) =>{
        return cloneElement(child,{
            onChange,checked:child.props.value === selected
        })
    })

    return (
        <>
            {radioOptions}
        </>
    )
}

export default RadioGroup

// const Teste = ({children}) => {

//     return(
//         <>
//             {children}
//         </>
//     )
// }

// const buttonProps ={
//     text:"texto padrão",
//     style:{
//         color:"primary",
//         backgoundColor:"black"
//     }
// }

// //jeito normal
// const CustomButton = ({children,color,new}) => {
//     const customStyle ={
//         color:color,
//     }
//     if(variant==="a"){
//         style
//     }
//     return(
//     <>
//         <button style={customStyle}></button>
//     </>
//     )
// }

// <div>
//     <Teste>
//         coisas aqui dentro
//         <CustomButton new={"coisa nova"} color="azul" variant={} {...props}/>
//     </Teste>
// </div>