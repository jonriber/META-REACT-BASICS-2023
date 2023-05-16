/* eslint-disable react/prop-types */
import { Children, cloneElement } from "react"

const RadioGroup = ({onChange,selected,chidren}) => {
    const radioOptions = Children.map(chidren,(child) =>{
        return cloneElement(child,{onChange,checked:child.props.value === selected})
    })

    return (
        <>
            <h1>RadioGroup</h1>
            {radioOptions}
        </>
    )

}

export default RadioGroup