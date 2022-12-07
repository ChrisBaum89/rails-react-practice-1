import React, { Component } from "react";

export default class Item extends Component{
    render(){
        return(
            <div id={this.props.id}>
                {this.props.description}
                <button id={this.props.id} onClick={(event) => this.props.handleClick(event)}>X</button>
            </div>
        )
    }
}