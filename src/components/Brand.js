import React, { Component } from 'react';
import CartIcon from '../images/sun.png';

 class Brand extends Component {
  render() {
    return (
        <img className="responsive-img" src={CartIcon}/>
    );
  }
}

export default Brand;