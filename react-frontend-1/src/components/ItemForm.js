import React, { Component } from "react";

class ItemForm extends Component {
    constructor(){
        super();
        this.state = {
            description: ""
        }
    }
    
    
    render() {
        
        const handleOnChange = (event) => {
            this.setState({
                description: event.target.value
            })
        }
        
        return (
            <div>
                <form>
                    <label>Description</label>
                    <input onChange={(event) => handleOnChange(event)}></input>
                    <button onClick={() => this.props.handleClick(this.state.description)}>Add Item</button>
                </form>
            </div>
        )
    }
}

export default ItemForm