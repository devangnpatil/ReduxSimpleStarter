import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyAg7Ks-0DkgfK_TqC6Ft55ecH2_ZaTc7As';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {videos:[]};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos: videos});
		})
	}
	render(){
		return(
			<div>
				<SearchBar />
			</div>
			);
	}
}
ReactDOM.render(<App />, document.getElementById('container'));