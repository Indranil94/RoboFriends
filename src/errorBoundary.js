import React, {Component} from 'react';

class ErrorBounday extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(err, info){
		this.setState({
			hasError : true
		});
	}

	render(){
		if(this.state.hasError){
			return <h1> Error found here </h1>
		}
		else{
			return (<div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
						{this.props.children}
					</div>);
		}
	}
}

export default ErrorBounday;