import React, { Component } from "react";
import Item from "../components/Item";

export default class ItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    render() {
        const handleOnClick = (event) => {
            const id = event.target.id
            fetch(`http://localhost:3000/items/${id}/`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
        }

        const itemList = this.state.items.map(item => {
            return <Item id={item.id} description={item.attributes.description} handleClick={handleOnClick} setState={this.setState}/>
        })

        return (
            <div>
                {itemList}
            </div>
        )
    }

    componentDidMount() {
        fetch("http://localhost:3000/items/")
            .then(response => response.json())
            .then(json => this.setState({ items: json.data }))
    }
}