import React, { Component } from "react";
import Item from "../components/Item";
import ItemForm from "../components/ItemForm";
import {connect} from 'react-redux'
import { getItems, addItem, deleteItem } from "../actions/itemActions";

class ItemContainer extends Component {

    render() {
        const handleItemDelete = (id) => {
            fetch(`http://localhost:3000/items/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then(response => response.json())
                .then(json => this.props.deleteItem(json))
        }

        const handleItemAdd = (description) => {
            fetch(`http://localhost:3000/items/`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({description: description}),
                })
                .then(response => response.json())
                .then(json => this.props.addItem(json))
        }

        const itemList = this.props.items.map(item => {
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
        .then(json => this.props.getItems(json))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {getItems, addItem, deleteItem})(ItemContainer)