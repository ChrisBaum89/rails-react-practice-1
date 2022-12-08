import React, { Component } from "react";

export default class Item extends Component {
    render(){
        
        return(
            <div key={this.props.id}>
                {this.props.description}
                <button onClick={(id) => this.props.onItemDelete(this.props.id)} >X</button>
            </div>
        )
    }
}