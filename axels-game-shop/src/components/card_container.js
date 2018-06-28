import React from 'react';
import Card from './card';
import {connect} from 'react-redux';

class CardContainer extends React.Component {
	render(){
			// console.log(this.props);

		return (
		<main role="main" className="container cardContainer">
		<h1>Axel's Game Shop</h1>
		<div className='row'>
    	{this.props.games.map((game)=> {
    		return <Card key={game.id} updateQuantity={this.props.updateQuantity} addToCart={this.props.addToCart} game={game} />
    	})}
    	</div>
    </main>
	);
	}

}

const mapStateToProps = (state) => {
  return {
     games: state.gameData
     
  }
}

export default connect(mapStateToProps)(CardContainer);