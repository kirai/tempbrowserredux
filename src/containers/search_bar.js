import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    onFromSubmit(event) {
        event.preventDefault();

        // Fetch the weather data
        // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''})
    }

    render() {
        return (
            <form onSubmit={this.onFromSubmit} className="input-group">
                <input 
                    placeholder="Get five day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);