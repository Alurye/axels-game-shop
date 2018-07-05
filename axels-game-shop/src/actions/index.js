export function addToCart(item) {
	return {
		type: "ADD_TO_CART",
		payload: item
	}
}

export function showGameDetails(game) {
	return {
		type: "SHOW_GAME_DETAILS",
		payload: game
	}
}

export function deleteItem(item) {
	return {
		type: "DELETE_ITEM",
		payload: item
	}
}

export function handleQuantity(e, item) {
	return {
		type: "HANDLE_QUANTITY",
		payload: item,
		qty: e.target.value
	}
}

let url = 'http://localhost:3000/api/v1/games';

export function getGames() {
	return(dispatch, getState) => {
			 fetch(url, {
			headers: {
				'content-type': 'application/json',
				'authorization': localStorage.getItem("token")
			},
		}).then(res => res.json())
		.then(json => {
			console.log(json)
			dispatch({type: "GET_GAMES", payload:json});
				// this.setState({
				// 	games: json
				// });
		});

	}



}

// export function updateQuantity(quantity, id){
// 	type: "UPDATE_QUANTITY",
// 	payload:
// }
