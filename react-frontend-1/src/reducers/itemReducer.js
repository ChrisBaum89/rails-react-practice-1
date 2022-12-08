export function itemReducer(state = {items: [], loading: false}, action){
    switch(action.type){
        case "START_ADD_ITEM_REQUEST":
            return {
                ...state, loading: true,
            }
        
        case "ADD_ITEM":
            return state

        case "START_DELETE_ITEM_REQUEST":
            return {
                ...state, loading: true,
            }

        case "DELETE_ITEM":
            return state

        case "START_GET_ITEMS_REQUEST":
            return {
                ...state, loading: true,
            }

        case "GET_ITEMS":
            return state
        
        default:
         return state
    }
}