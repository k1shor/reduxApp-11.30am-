const initialData ={
    cart_items:[]
}

function finalCartReducer(state=initialData, action){
    switch(action.type){
        case "ADD_TO_CART":
            return {cart_items: [...state.cart_items, action.payload]}

        case "REMOVE_FROM_CART":
            return {cart_items:[...state.cart_items.filter(item=>item!==action.payload)]}

            // a, b, c, d , payload: c, filter: a, b, d

        case "EMPTY_CART":
            return {cart_items: []}

        default :
            return state;
    }
}

export default finalCartReducer