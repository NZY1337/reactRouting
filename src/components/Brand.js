import React, { Component } from 'react';
import CartIcon from '../images/sun.png';

 class Brand extends Component {
  render() {
    return (
     <div>
          <a href="#" className="brand-logo">
              <img className="responsive-img" src={CartIcon}/>
          </a>
     </div>
    );
  }
}

export default Brand;