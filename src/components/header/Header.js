import React from 'react'
import { ReactDOM } from 'react';
import HeaderPart1 from '../header/HeaderPart1';
import HeaderPart2 from '../header/HeaderPart2';
import "../../index.css";
const Header = () => {
  return (
    <>
      <div id='header'>
         <div className='container py-5'>
            <div className='row'>
                <HeaderPart1/>
                <HeaderPart2/>
            </div>
         </div>
      </div>
    </>
  )
}

export default Header;
