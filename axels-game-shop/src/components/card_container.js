import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getGames} from '../actions/index';




class CardContainer extends React.Component {

state = {
	games: []
}

componentDidMount(){
 this.props.dispatch(getGames());
}


// getGames = () => {
//
// 	let url = 'http://localhost:3000/api/v1/games'
// 	fetch(url, {
// 		headers: {
// 			'content-type': 'application/json',
// 			'authorization': localStorage.getItem("token")
// 		},
// 	}).then(res => res.json())
// 	.then(json => {
// 		console.log(json)
// 			this.setState({
// 				games: json
// 			});
// 	});
// }

	render(){
			// console.log(this.props);

		return (
		<main role="main" className="container cardContainer">
		<h1>Axel's Game Shop</h1>
		<div className='row'>
    	{this.props.games.map((game)=> {
    		return <Card key={game.id} game={game} />
    	})}
    	</div>
    </main>
	);
	}

}

const mapStateToProps = (state) => {
  return {
     games: state.gameData,

  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getGames: (games) => {
			dispatch({ type: "GET_GAMES", payload: games})
		},
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
