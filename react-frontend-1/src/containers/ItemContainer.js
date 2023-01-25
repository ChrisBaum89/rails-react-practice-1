import React, { useState } from 'react';
import InputForm from '../components/InputForm';

function ItemContainer() {
    const [items, setItems] = useState([])

    const handleOnSubmit = () => {
        debugger
    }

    return(
        <div>
            {/* input form */}
            <InputForm nnSubmit = {handleOnSubmit}/>
            {/* list of items */}
        </div>
    )
}

export default ItemContainer