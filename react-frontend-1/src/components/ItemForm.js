import React, { Component } from "react";

class ItemForm extends Component {
    constructor(){
        super();
        return (
            {state: this.setState({description: ""})})
    }
    
    
    render() {
        
        const handleOnChange = (event) => {
            debugger
        }
        
        return (
            <div>
                <form>
                    <label>Description</label>
                    <input onChange={(event) => handleOnChange(event)}></input>
                    <button onClick={(event) => this.props.handleClick(event)}>Add Item</button>
                </form>
            </div>
        )
    }
}

export default ItemForm