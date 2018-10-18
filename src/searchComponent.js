import React from 'react';

const SearchComponent = ({searchChange}) =>{
	return(
		<div>
			<input 
			type="search"
			placeholder="search robot"
			onChange={searchChange} />
		</div>
		);
}
export default SearchComponent;