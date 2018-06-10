import React from 'react';
import Card from './card';

class CardContainer extends React.Component {
	// console.log(props);
	render(){
		return (
		<main role="main" className="container cardContainer">
		<h1>Axel's Game Shop</h1>
		<div className='row'>
    	{this.props.gameData.map((game)=> {
    		return <Card addToCart={this.props.addToCart} game={game} />
    	})}
    	</div>
    </main>
	);
	}
	
}

export default CardContainer;