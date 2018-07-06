const initialState = {
		gameData: [],
    shoppingCart:[],
    cartClicked: false,
		gameFormClicked: false,
		gameDetailsClicked:false,
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

			case "ADD_TO_CART":
				let newState
				if (state.shoppingCart.includes(action.payload)) {
					newState = {...state}
				} else {
					newState = {...state, shoppingCart: [...state.shoppingCart, action.payload], currentCartItem: action.payload}
				}

				return newState;

			case "SHOW_GAME_DETAILS":
				return {...state, gameDetailsClicked: !state.gameDetailsClicked, currentCartItem: action.payload}

			case "DISPLAY_FORM":
				return {...state, gameFormClicked: !state.gameFormClicked, cartClicked: false};

			case "DISPLAY_CART":
				return {...state, cartClicked: !state.cartClicked, gameFormClicked: false};

			case "DELETE_ITEM":
				let filteredCart = state.shoppingCart.filter((itm) => {
					return itm.id !== action.payload.id
				});
				return {...state, shoppingCart: filteredCart};

			case "HANDLE_QUANTITY":
				 let updatedGameData = state.gameData.map((game) => {
					 if (game.id === action.payload.id) {
						 return {
							 ...game,
							 quantity: action.qty
						 }
					 }
					 return game;
				 })

				 return {...state, gameData: updatedGameData};

			default:
				return state;
	}

}

export default reducer;
