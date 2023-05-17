import MousePosition from "../prop renders/MousePosition"

function MousePositionTracker(){

    return(
        <>
            <div>
                <h3>Prop Render</h3>
                <MousePosition render={({mousePosition}) => (
                     <div className="Row" style={{border:"solid blue"}}>
                     <span>x: {mousePosition.x}</span>
                     <span>y: {mousePosition.y}</span>
                   </div>
                )}/>
            </div>
        </>
    )
}

export default MousePositionTracker