import React, { Component } from "react";
import Item from "../components/Item";
import {connect} from "react-redux"
import ItemForm from "../components/ItemForm";
import { deleteItem, fetchItems, addItem } from "../actions/ItemAction";

class ItemContainer extends Component {

    render() {

        const handleOnClick = (event) => {
            const itemId = event.target.id
            this.props.deleteItem(itemId)
        }

        const handleAddItem = (description) => {
           this.props.addItem(description)
        }

        const itemList = this.props.items.map(item => {
            return <Item id={item.id} description={item.attributes.description} handleClick={handleOnClick} setState={this.setState}/>
        })

        const formDisplay = () => {
            if (this.props.loading){
                return <div>Loading...</div>
            }
            else{
                return <ItemForm handleClick={handleAddItem}/>
            }
        }

        return (
            <div>
                {formDisplay()}
                {itemList}
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchItems()
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemList.items,
        loading: state.itemList.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchItems: () => dispatch(fetchItems()),
        deleteItem: (id) => dispatch(deleteItem(id)),
        addItem: (description) => dispatch(addItem(description)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)