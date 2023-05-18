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

////TO TEST
// const Button = ({ children, ...rest }) => (
//     <button onClick={() => console.log("ButtonClick")} {...rest}>
//       {children}
//     </button>
//   );
  
//   const withClick = (Component) => {
//     const handleClick = () => {
//       console.log("WithClick");
//     };
  
//     return(props) => {
//       return<Component {...props} onClick={handleClick} />;
//     };
//   };
  
//   const MyButton = withClick(Button);
  
//   export default function App() {
//     return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
//   }