let initialState = {
    products: [],
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                products: [...state.products, action.id],
            };

        case "REMOVE_PRODUCT":
            return {
                products: state.products.filter((product) => {
                    return product !== action.id;
                }),
            };

        case "CLEAR_CART":
            return {
                products: [],
            };

        default:
            return state;
    }
};

export default reducer;
