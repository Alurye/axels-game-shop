import React from 'react';

class SearchBar extends React.Component {


	render(){
		return(
			<form className="form-inline my-2 my-lg-0">
	          <input onChange={(e)=>this.props.handleSearch(e)} value={this.props.query} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
	          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        	</form>
			);
	}
}

export default SearchBar;
