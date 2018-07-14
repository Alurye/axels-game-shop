const initialState = {
		gameData: [],
		inventory: [],
    shoppingCart:[],
		itemQty:0,
    cartClicked: false,
		gameFormClicked: false,
		gameDetailsClicked:false,
		loggedIn:false,
		orderNumber:'',
    query: '',
    cartCount:0,
    currentCartItem: {
        title:'',
        console:'',
        quantity:0,
        price:'',
        genre:'',
        img:'',
        description:''
	}

}
const reducer = (state = initialState, action) => {
		switch(action.type) {
			case "GET_GAMES":
		  	return { ...state, gameData: action.payload }

				case "DELETE_GAME":
				console.log('hit', action.payload);
			 let filteredInventory = state.inventory.filter((item) => {
						return item.id !== action.payload
				});
				return {...state, inventory: filteredInventory}

			case "GET_INVENTORY":

				return {...state, inventory: action.payload}

			case "ADD_TO_CART":
				console.log('atc')
				// console.log(state.currentCartItem, action.payload);
				console.log(state.currentCartItem);
				// const x = state.currentCartItem: action.payload

				// return {...state, shoppingCart: [...state.shoppingCart, state.currentCartItem ], currentCartItem: action.payload}


				return {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}
				// return {...state, currentCartItem:{...action.payload, quantity: state.itemQty}, shoppingCart: [...state.shoppingCart, state.currentCartItem]}


			case "SHOW_GAME_DETAILS":
				return {...state, gameDetailsClicked: !state.gameDetailsClicked, currentCartItem: action.payload}

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
				 	console.log("hq", action.payload, "qty", action.qty, "stateqty", state.itemQty)
				 return {...state, currentCartItem: action.payload, itemQty: action.qty };

			default:
				return state;
	}

}

export default reducer;
