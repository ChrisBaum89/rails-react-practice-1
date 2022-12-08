import React, { Component } from "react";

class Item extends Component {
    render(){
        return (
            <div>
                {this.props.description}
                <button id={this.props.id} onClick={(event) => this.props.handleClick(event)}>X</button>
            </div>
        )
    }
}

export default Item