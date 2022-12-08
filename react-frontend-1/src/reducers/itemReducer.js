export function itemReducer(state = {items: [], loading: false}, action){
    switch(action.type){
        case "START_ADD_ITEM_REQUEST":
            return {
                ...state, loading: true,
            }
        
        case "ADD_ITEM":
            return {
                ...state,
                items: action.payload.data,
                loading: false,
            }

        case "START_DELETE_ITEM_REQUEST":
            return {
                ...state, loading: true,
            }

        case "DELETE_ITEM":
            debugger
            return {
                ...state,
                items: action.payload.data,
                loading: false,
            }

        case "START_GET_ITEMS_REQUEST":
            return {
                ...state, loading: true,
            }

        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload.data,
                loading: false,
            }
        
        default:
         return state
    }
}