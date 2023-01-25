import React, { useState } from "react";

function InputForm(props){
    const [formInput, setFormInput] = useState('')

    // controlled form input
    const handleOnChange = (event) => {
        setFormInput(event.target.value)
    }

    return(
        <div>
            <form>
                <input onChange={handleOnChange}></input>
                <button onSubmit={props.onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default InputForm