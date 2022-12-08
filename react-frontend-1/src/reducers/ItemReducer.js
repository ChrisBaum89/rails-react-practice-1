export const ItemReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state, items: action.payload.data
            }

            case "DELETE_ITEM":
            return {
                ...state, items: action.payload.data
            }

            case "GET_ITEMS":
            return {
                ...state, items: action.payload.data
            }
    
        default:
            return state;
    }
}