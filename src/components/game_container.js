import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getGames} from '../actions/index';




class GameContainer extends React.Component {

componentDidMount(){
	this.props.dispatch(getGames());
}

capitalize = (str) => {
return str.charAt(0).toUpperCase() + str.slice(1);
}


	render(){
		let heading = this.props.location.pathname.split('/')[1];

		return (
		<main role="main" className="container gameContainer">
		<h1>{this.capitalize(heading)}</h1>
		<div className='row'>
    	{this.props.games.map((game)=> {
    		return <Card key={game.id} {...this.props} game={game} />
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

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
