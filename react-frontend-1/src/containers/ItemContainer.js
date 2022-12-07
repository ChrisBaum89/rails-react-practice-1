import React, { Component } from "react";
import Item from "../components/Item";
import { connect } from "react-redux";

class ItemContainer extends Component {

    render() {
        const handleOnClick = (event) => {
            const id = event.target.id
            fetch(`http://localhost:3000/items/${id}/`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())

            .then(json => this.props.dispatch({type: "DELETE_ITEM", payload: json}))
        }

        const itemList =
            this.props.items.map(item => {
            return <Item id={item.id} description={item.attributes.description} handleClick={handleOnClick}/>
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
            .then(json => this.props.dispatch({type: "ADD_ITEMS", payload: json}))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemContainer)

