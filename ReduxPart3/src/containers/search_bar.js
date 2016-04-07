import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state = {term: ''}

		//this ^ 
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input
					placeholder="Get a five-day forcast in your fav city" 
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
	//putting onform submit on form will override the default action of submitting
	//we get some free functionality for using these eventhandlers
	onFormSubmit(event){
		event.preventDefault();
		console.log('getting weather requst')
		this.props.fetchWeather(this.state.term)

		//we need to go fetch weather data
		this.setState({term: ""})
	}

	onInputChange(event){
		this.setState({term:event.target.value})
	}
}

//The dispatch makes it so all reducers are aware that a paticular action occured
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch)
}

//By passing null to first we say we don't need to update state in this container
export default connect(null, mapDispatchToProps)(SearchBar)

//Think about context if binding is not working correctly

//Goal is wire up action creator

