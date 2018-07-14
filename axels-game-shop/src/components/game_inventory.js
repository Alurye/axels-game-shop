import React from 'react';
import Item from './item';
import GameContainer from './game_container';
import {connect} from 'react-redux';
import {getInventory} from '../actions/index';




class GameInventory extends React.Component {

state = {
	inventory: []
}

componentDidMount(){
	this.props.dispatch(getInventory());

}

//
// getInventory = () => {
//
// 	let url = `http://localhost:3000/api/v1/admin/${localStorage.getItem("id")}/games`
// 	fetch(url, {
// 		headers: {
// 			'content-type': 'application/json',
// 			'authorization': localStorage.getItem("token")
// 		},
// 	}).then(res => res.json())
// 	.then(json => {
// 		console.log(json)
// 			this.setState({
// 				inventory: json
// 			});
// 	});
// }

	render(){

		let heading = this.props.location.pathname.split('/')[1];

		return (
			<main role="main" className="container gameContainer">
			<h1>Inventory</h1>
			<div className='row'>
				{this.props.inventory.map((game)=> {
					return <Item key={game.id} {...this.props} game={game} />
				})}
				</div>
			</main>
	);
	}

}

const mapStateToProps = (state) => {
  return {
     inventory: state.inventory

  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getInventory: (games) => {
			dispatch({ type: "GET_INVENTORY", payload: games})
		},
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInventory);
