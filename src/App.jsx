'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ImgBlock from './ImgBlock';
import SearchBar from './SearchBar';
import Photos from './Photos';
import '../assets/styles/master.scss';


const API_KEY = '80aafb8d5879b4ab3d58a6543021cd59';
const API_SECRET = '9f63f74224fb0b3c';
const baseURL = 'https://api.flickr.com/services';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: [],
			images: new Array(5).fill('http://lorempixel.com/400/300/'),
			options: { 
			  "api_key": API_KEY,
			  "method": "flickr.photos.search",
			  "format": "json",
			  "nojsoncallback": "1",
			  "text": "yoda"
			}
		};
	}

	renderImgs(imgArr) {
		return imgArr.map((img, index) => <ImgBlock key={index} title={ index } url={ img } /> );
	}

	buildPhotoUrl(obj) {
		// console.log(obj);
		return `http://farm${obj['farm']}.staticflickr.com/${obj['server']}/${obj.id}_${obj.secret}.jpg`;
	}

	fetchPhotos(options, cb) {
	  var url, xhr, item, first;

	  url = "https://api.flickr.com/services/rest/";
	  first = true;

	  for (item in options) {
	    if (options.hasOwnProperty(item)) {
	      url += (first ? "?" : "&") + item + "=" + options[item];
	      first = false;
	    }
	  }

	  xhr = new XMLHttpRequest();
	  xhr.onload = function() { cb(this.response); };
	  xhr.open('get', url, true);
	  xhr.send();
	}

	preFetch() {
		// setTimeout(() => {
		// 	this.fetchPhotos(this.state.options, (response) => { self.setState({ response }); });
		// }, 2000);
		const self = this;
		this.fetchPhotos(this.state.options, (response) => {
			this.setState({ response: JSON.parse(response).photos.photo });
		});
	}

	componentWillMount() {
		this.preFetch();
	}

	componentDidMount() {
		// this.preFetch();
		let urls = this.state.response.map((obj, id) => this.buildPhotoUrl(obj));
		console.log(urls);
	}

	render() {
		const resp = this.state.response;
		return (
			<main>
				<SearchBar />
				<Photos
					imgArr={ resp.map((img, i) => this.buildPhotoUrl(img)) } />
			</main>
		);
	}
};


ReactDom.render(
	<App />,
	document.getElementById('root')
);
