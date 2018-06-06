import React from 'react';
import GameDetails from './game_details';

class Card extends React.Component {
	
	state = {
		isClicked: false
	}

	  showGameDetails = (e) => {
     e.preventDefault();
     this.setState({
      isClicked: !this.state.isClicked
    });
 }

     render() {
     	const {title,img,description, genre} = this.props.game
     	console.log(this.state.isClicked)
     return (
		<div className="col-lg-4 col-md-6">
		  <div className="card" style={{width: 18 + "rem"}}>
			<img className="card-img-top" src={img} alt="Card image cap" />
			  <a onClick={this.showGameDetails} href="" className="btn btn-primary btn-block">Game Info</a>
			  <button type="button" class="btn btn-success btn-block">Add To Cart</button>

				{this.state.isClicked ?  <GameDetails title={title} description={description} genre={genre} />: null }
		</div>
	</div>
	)
     }

}

export default Card;