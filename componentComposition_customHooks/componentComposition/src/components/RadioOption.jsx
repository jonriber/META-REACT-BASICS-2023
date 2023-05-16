/* eslint-disable react/prop-types */
function RadioOption({value,checked,onChange,children}){

    return(
        <>
            <h4>RadioOption</h4>
            <input
                id={value}
                type="radio"
                checked={checked}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={value}>{children}</label>
        </>
    )

}

export default RadioOption