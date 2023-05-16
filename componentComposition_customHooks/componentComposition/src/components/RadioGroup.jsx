/* eslint-disable react/prop-types */
import { Children, cloneElement } from "react"

const RadioGroup = ({onChange,selected,children}) => {
    const radioOptions = Children.map(children,(child) =>{
        return cloneElement(child,{onChange,checked:child.props.value === selected})
    })

    return (
        <>
            {radioOptions}
        </>
    )

}

export default RadioGroup