import React, { Component } from "react";
import { render } from "react-dom";

class ItemForm extends Component{
    constructor(){
        super();
       this.state = {
        description: ''
       }
    }

    render(){
        const handleOnChange = (event) => {
            this.setState({
                ...this.state,
                description: event.target.value
            })
        }

        return(
            <div>
                <form>
                    <label>Description</label>
                    <input onChange={(event) => handleOnChange(event)} name="description"></input>
                    <button onClick={() => this.props.handleClick(this.state.description)}>Add</button>
                </form>
            </div>
        )
    }
}

export default ItemForm