const initialState = {
		gameData: [],
		inventory: [],
    shoppingCart:[],
    cartClicked: false,
		gameFormClicked: false,
		gameDetailsClicked:false,
		loggedIn:false,
		orderNumber:'',
    query: '',
    cartCount:0,
    currentCartItem: null

}

// Keep the object as is, send the itemQty down as state
const reducer = (state = initialState, action) => {
		switch(action.type) {
			case "GET_GAMES":
		  	return { ...state, gameData: action.payload }

				case "DELETE_GAME":
				if (state.shoppingCart.length === 0) {
					return {...state, currentCartItem: null}
				} else {
						let filteredInventory = state.inventory.filter((item) => {
							 return item.id !== action.payload
					 });
					 return {...state, inventory: filteredInventory}

				}

			case "GET_INVENTORY":

				return {...state, inventory: action.payload}

			case "REFRESH_CART":
				console.log(action.payload)
				let newCart = state.shoppingCart.map((item) => {
							if (item.id === action.payload.id){
								 return action.payload
							} else {
								return item
							}
				});
				return {...state, shoppingCart: newCart}
			case "ADD_TO_CART":

				if (state.currentCartItem === null) {
					console.log('if', state.currentCartItem)
					return {...state, shoppingCart: [...state.shoppingCart, action.payload]}
				} else {
					console.log('else', state.currentCartItem)
					return {...state, shoppingCart: [...state.shoppingCart, state.currentCartItem]}
				}

				// return {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}
				// return {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}

				// return {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}
				// return {...state, currentCartItem:{...action.payload, quantity: state.itemQty}, shoppingCart: [...state.shoppingCart, state.currentCartItem]}

				case "RESET_CURRENT_CART_ITEM":

					return {...state, currentCartItem: action.payload}

		  	// case "SHOW_GAME_DETAILS":
			  // 	return {...state, gameDetailsClicked: !state.gameDetailsClicked, currentCartItem: action.payload}

			 case "SAVE_ORDER_NUMBER":
			  	return {...state, orderNumber: action.payload }


		   case "LOGIN":
			  	return {...state, loggedIn: !state.loggedIn}

		   case "DELETE_ITEM":
				let filteredCart = state.shoppingCart.filter((itm) => {
					return itm.id !== action.payload.id
				});
				return {...state, shoppingCart: filteredCart};

			case "HANDLE_QUANTITY":
				 // let updatedGameData = state.gameData.map((game) => {
					//  if (game.id === action.payload.id) {
					// 	 return {
					// 		 ...game,
					// 		 quantity: action.qty
					// 	 }
					//  }
					//  return game;
				 // })
				 return {...state, currentCartItem: action.payload};

			default:
				return state;
	}

}

export default reducer;
