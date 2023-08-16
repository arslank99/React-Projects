import React from 'react'
import { ReactDOM } from 'react';
import "../../index.css";

const HeaderPart1 = () => {
  return (
    <>
       <div className='col-md-5'>
            <h1>Keep Your Clean Cars Always</h1>
            <div className='content'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
            <div className='buttons'>
                <button type="" className='btn btn-primary px-5 me-3'>Get a Qoute</button>
                <button type="" className='btn btn-primary px-5'>Contact Us</button>
            </div>
      </div>
      <div className='col-md-1'></div>
    </>
    
  );
}

export default HeaderPart1;