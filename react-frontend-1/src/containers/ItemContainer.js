import React, { Component } from "react";
import Item from "../components/Item";
import ItemForm from "../components/ItemForm";

export default class ItemContainer extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }

    render() {

        const handleItemDelete = (id) => {
            fetch(`http://localhost:3000/items/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then(response => response.json())
                .then(json => this.setState({ items: json.data }))
        }

        const handleItemAdd = (description) => {
            fetch(`http://localhost:3000/items/`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({description: description}),
                })
                .then(response => response.json())
                .then(json => this.setState({ items: json.data }))
        }

        const itemList = this.state.items.map(item => {
            return (
                <Item id={item.id} description={item.attributes.description} onItemDelete={handleItemDelete}/>
            )
        })

        return (
            <div>
                <ItemForm onItemAdd={handleItemAdd} />
                {itemList}
            </div>
        )
    }

    componentDidMount() {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(json => this.setState({ items: json.data }))
    }
}