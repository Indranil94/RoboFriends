import React from 'react';
//import {robots} from "./robots";

const RobotComp = (props) => 
{
	return(
			<div className="tc dib bw2 ma3 bg-light-green pa3 grow w5-m shadow-5">
				<img src={`https://robohash.org/${props.id}?size=200x200`} alt="robot" />
				<h2>{props.name}</h2>
				<h2>{props.email}</h2>
			</div>
		);
}
export default RobotComp;