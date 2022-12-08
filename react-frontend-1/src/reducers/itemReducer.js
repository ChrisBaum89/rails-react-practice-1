export default function itemReducer(state = {items: [], loading: false}, action){
    switch (action.type) {
        case "START_ADD_ITEMS_REQUEST":
            return {
                ...state, loading: true
            }
        
        case "ADD_ITEMS":
            return {
                ...state, items: action.payload.data, loading: false
            }

        case "START_DELETE_ITEM_REQUEST":
            return {
                ...state, loading: true
            }

        case "DELETE_ITEM":
            return {
                ...state, items: action.payload.data, loading: false
            }
    
        default:
            return state
    }
}