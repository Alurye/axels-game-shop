const initialState = {
		gameData: [],
		inventory: [],
		orders:[],
    shoppingCart:[],
    cartClicked: false,
		gameFormClicked: false,
		gameDetailsClicked:false,
		loggedIn:false,
		orderNumber:'',
    query: '',
    cartCount:0,
    currentCartItem: null,
		cartAmount:0
}

// Keep the object as is, send the itemQty down as state
const reducer = (state = initialState, action) => {
		switch(action.type) {
			case "GET_GAMES":
		  		return { ...state, gameData: action.payload }

			case "GET_ORDERS":

					return {...state, orders: action.payload}

			case "DELETE_GAME":
					let filteredInventory = state.inventory.filter((item) => {
							 return item.id !== action.payload
					 });
					 return {...state, inventory: filteredInventory}

			case "CLEAR_CART":
				return {...state, shoppingCart: []}

				case "CLEAR_CART_COUNT":
					return {...state, cartCount: 0}

					case "CLEAR_CART_AMOUNT":
						return {...state, cartAmount: 0}

			case "TOTAL_CART_ITEMS":

				const totalCartItems = state.shoppingCart.reduce((totalCartItems,item) => {
										 return totalCartItems+=item.userQty;
									 },0);

				return {...state, cartCount: totalCartItems}

			case "GET_INVENTORY":

				return {...state, inventory: action.payload}

			case "REFRESH_CART":
				let newCart = state.shoppingCart.map((item) => {
							if (item.id === action.payload.id){
								 return action.payload
							} else {
								return item
							}
				});
				return {...state, shoppingCart: newCart}

			case "CART_TOTAL":
				let  total = state.shoppingCart.reduce((total,item) => {
							let subtotal = item.price*item.userQty;
							 return total+=subtotal;
			},0).toFixed(2);
				return {...state, cartAmount: total}

			case "ADD_TO_CART":

				if (state.currentCartItem === null) {
					return {...state, shoppingCart: [...state.shoppingCart, action.payload]}
				} else {
					return {...state, shoppingCart: [...state.shoppingCart, state.currentCartItem]}
				}

				case "RESET_CURRENT_CART_ITEM":

					return {...state, currentCartItem: action.payload}

			  case "SAVE_ORDER_NUMBER":
			  	return {...state, orderNumber: action.payload }


		    case "LOGIN":
			  	return {...state, loggedIn: !state.loggedIn}

		    case "DELETE_ITEM":

				 if (state.shoppingCart.length === 0) {
					 return {...state, currentCartItem: null}
				 } else {
					 let filteredCart = state.shoppingCart.filter((itm) => {
						 return itm.id !== action.payload.id
					 });
					 return {...state, shoppingCart: filteredCart};
				 }

			case "HANDLE_QUANTITY":
				 return {...state, currentCartItem: action.payload};

			default:
				return state;
	}

}

export default reducer;
