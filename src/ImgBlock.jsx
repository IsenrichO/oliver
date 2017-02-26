'use strict';
import React from 'react';


// Promisify image loading before `then`ing style manipulation:
const gg = (index, url, title) => {
  let img = new Image(),
      adjustedWidth;
  return new Promise(function(resolve, reject) {
    img.src = url;
    img.onload = function() {
      resolve((this.width / this.height) * (window.innerHeight / 10));
    }
  })
  .then(val => {
    document.querySelector(`.block-${index}`).style.maxWidth = `${val}px`;
  });
};


const ImgBlock = ({ index, url, title }) => {
  const titleWidth = gg(index, url, title);

  return (
  	<figure className={ `img-block block-${index}` }>
  		<img
  			src={ url }
  			alt='Flickr Image' />
  		<figcaption>{ title }</figcaption>
  	</figure>
  );
};

export default ImgBlock;
