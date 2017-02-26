'use strict';
import React, { Component } from 'react';
import ImgBlock from './ImgBlock';


const Photos = ({ imgData, imgUrls }) => (
	<div className="img-container">
		{ imgData.map((img, index) => (
        <ImgBlock
          key={ `ImgEntry_${index}` }
          index={ index }
          title={ img.title }
          url={ img.url } />
      ))
    }
	</div>
);

export default Photos;
