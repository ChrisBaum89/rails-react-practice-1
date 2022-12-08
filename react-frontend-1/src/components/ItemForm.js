import React, { Component } from "react";

export default class ItemForm extends Component {
    constructor(){
        super();
        this.state = {
            description: ""
        }
    }

    render(){

        const handleOnChange = (e) => {
            this.setState({description: e.target.value})
        }

        return(
            <div>
                <form>
                    <label>Description</label>
                    <input onChange={(e) => handleOnChange(e)}></input>
                    <button onClick={(description) => this.props.onItemAdd(this.state.description)}>Add Item</button>
                </form>
            </div>
        )
    }
}