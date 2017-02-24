'use strict';
import React from 'react';


const ImgBlock = ({ url, title }) => (
	<div className="img-block">
		<img
			src={ url }
			alt='image' />
		<p>{ title }</p>
	</div>
);


export default ImgBlock;
