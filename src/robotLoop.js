import React from "react";
import RobotComp from "./robotComponent";

const AllRobots = ({robotarray}) =>{
	const RobList = robotarray.map( (ind,i) =>{
		return <RobotComp key = {i} id = {ind.id} name = {ind.name} email = {ind.email} />
	});
	return RobList;
}
export default AllRobots;