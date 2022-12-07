export default function itemReducer(
    state={
        items: []
    },
    action)
{
    switch (action.type) {
        case "ADD_ITEMS":
            debugger
            return {...state, items: action.payload.data};
        case "DELETE_ITEM":
            return {...state, items: action.payload.data};
        default:
            return state;
    }
}