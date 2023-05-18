/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const Button = ({ children, ...rest }) => {
    console.log("props do componente final:",rest);
    return(
    <button  {...rest} onClick={() => console.log("ButtonClick")}>
      {children}
    </button>
  )};
  
const withClick = (Component) => {
    const handleClick = () => {
        console.log("WithClick");
    };
    return(
        (props) => {
            console.log("props dentro do withClick:",props)
            return (
            
            <Component  {...props} onClick={handleClick} />
        )}
    )
    };
  
const MyButton = withClick(Button);

export default MyButton
  
//   export default function App() {
//     return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
//   }