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

export function handleQuantity(q,item) {
	return {
		type: "HANDLE_QUANTITY",
		payload: item,
		qty: q
	}
}

export function getGames() {
	let url = 'http://localhost:3000/api/v1/games';

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

		});

	}


}
