import React, { Component } from 'react';
import loadImg from './loading.gif'
const Loader = () =>{
		return(
	        <div className="loader" >
			  <img src={loadImg} width="60" />
	        </div>
		)
}

export default Loader;