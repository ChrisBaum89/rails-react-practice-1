import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../components/Item"
import { getItems } from "../actions/itemAction";
import ItemForm from "../components/ItemForm";
import { deleteItem } from "../actions/itemAction";
import { addItem } from "../actions/itemAction";

class ItemContainer extends Component {
    
    componentDidMount(){
        this.props.getItems()
    }
    
    render(){

        const handleAddItem = (description) => {
            this.props.addItem(description)

        }

        const handleDeleteItem = (event) => {
            this.props.deleteItem(event.target.id)
        }

        const itemList = this.props.items.map((item) => {
            return(
                <div key={item.id}>
                    <Item id={item.id} description={item.attributes.description} handleClick={handleDeleteItem}/>
                </div>
            )
        })


        return(
            <div>
                <ItemForm handleClick={handleAddItem}/>
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.itemList.items,
        loading: state.itemList.loading,
    })
}

export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ItemContainer)