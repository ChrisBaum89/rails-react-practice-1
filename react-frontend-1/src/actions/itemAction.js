import { bindActionCreators } from "redux"

export const getItems = () => {
    return (dispatch) => {
        dispatch({ type: "START_GET_ITEMS_REQUEST" })
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(data => dispatch({ type: "GET_ITEMS", payload: data }))
    }
}

export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch({ type: "START_DELETE_ITEM_REQUEST" })
        fetch(`http://localhost:3000/items/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => response.json())
            .then(data => dispatch({ type: "DELETE_ITEM", payload: data }))
    }
}

export const addItem = (description) => {
    return (dispatch) => {
        dispatch({ type: "START_ADD_ITEM_REQUEST" })
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    description: description
                })
            })
            // .then(response => {debugger})
            // .then(data => dispatch({ type: "ADD_ITEM", payload: data }))
    }   
}