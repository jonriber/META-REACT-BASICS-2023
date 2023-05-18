/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const Button = ({ children, ...rest }) => {
    console.log("props do componente final:",rest);
    return(
    <button  {...rest} onClick={() => console.log("ButtonClick")}>
      {children}
    </button>
  )};
  
const withClick = (Component) =>  //recebe um componente
    
    ( //retorna um novo componente não nomeado, que retorna o mesmo componente recebido, MAS, com algumas atualizações de negócio e as props
        (props) => {
            const handleClick = () => {
                console.log("WithClick");
            };

            return (
            
            <Component  {...props} onClick={handleClick} /> //se o spread está no começo, tudo que veio do pai, e sobre-escrevo  a propriedade onClick
        )}
    )
    
const MyButton = withClick(Button);

export default MyButton
  
//   export default function App() {
//     return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
//   }