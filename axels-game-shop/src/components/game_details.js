import React from 'react';

const GameDetails = ({title,genre,description}) => {
	
	return (
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text"><strong>Genre:</strong> {genre}</p>
			<p className="card-text"><strong>Description:</strong> {description}</p>
		</div>
		)
}

export default GameDetails;