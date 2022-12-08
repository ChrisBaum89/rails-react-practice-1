export function addItem(description) {
    return (dispatch) => {
        dispatch({ type: "START_ADD_ITEM_REQUEST" })
        fetch('http://localhost:3000/items/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    item: {
                        description: description
                    }
                })
            })
            .then(response => response.json())
            .then(json => dispatch({ type: "ADD_ITEMS", payload: json }))
    }
}

export function deleteItem(id) {
    return (dispatch) => {
        dispatch({ type: "START_DELETE_ITEM_REQUEST" })
        fetch(`http://localhost:3000/items/${id}/`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(json => dispatch({ type: "DELETE_ITEM", payload: json }))
    }
}

export function fetchItems() {
    return (dispatch) => {
        dispatch({ type: "START_ADD_ITEMS_REQUEST" })
        fetch("http://localhost:3000/items/")
            .then(response => response.json())
            .then(json => dispatch({ type: "ADD_ITEMS", payload: json }))
    }
}