export const getItems = (json) => {
    return {
        type: "GET_ITEMS",
        payload: json,
    }
}

export const addItem = (json) => {
    return {
        type: "ADD_ITEM",
        payload: json,
    }
}

export const deleteItem = (json) => {
    return {
        type: "DELETE_ITEM",
        payload: json,
    }
}