const initialData = {
    cart_item : 0
}

function cart_reducer(state=initialData, action){
    switch(action.type){
        case "ADD_TO_CART" :
            // console.log(state.cart_item)
            return {
                cart_item : ++state.cart_item
            }
        case "REMOVE_FROM_CART":
            return {
                cart_item : --state.cart_item
            }
        case "RESET":
            return{
                cart_item : 0
            }
        default: 
            return state;



    }
}

export default cart_reducer;