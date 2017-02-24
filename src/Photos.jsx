'use strict';
import React, { Component } from 'react';
import ImgBlock from './ImgBlock';


// const renderImages = (images) =>

const Photos = ({ imgArr }) => (
	<div className="img-container">
		{
			imgArr.map((img, index) => <ImgBlock key={index} title={ index } url={ img } /> )
		}
	</div>
);

export default Photos;
