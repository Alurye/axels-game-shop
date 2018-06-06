import React from 'react';
import Card from './card';

const CardContainer = (props) => {
	// console.log(props);
	return (
		<main role="main" className="container">
		<div className='row'>
    	{props.gameData.map((game)=> {
    		return <Card game={game} />
    	})}
    	</div>
    </main>
	);
}

export default CardContainer;