/* eslint-disable react/prop-types */
const MousePositionLogger = ({mousePosition}) => {

    if(!mousePosition) null
    return(
        <>  
            <div style={{border:"solid red"}}>
                <h3>Using HOC to log mouse position!</h3>
                <p>Position:{mousePosition.x}, {mousePosition.y}</p>
            </div>
            
        </>
    )
}

export default MousePositionLogger