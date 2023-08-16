import React from 'react'
import { ReactDOM } from 'react';
import border1 from "../images/border1.png";
import ChoseSection from './ChoseSection';
import "../../index.css";

const Choose = () => {
  return (
    <>
        <div id='choose'>
            <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8 text-center'>
                            <h1><span className='text-dark'>Why</span> <span className="txt-custom">Choose Us?</span></h1>
                            <img src={border1} alt=""/>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div> 
                <div className='container py-3'>
                    <div className='row'>
                        <ChoseSection/>
                    </div>
                </div>
        </div>
    </>
    
  )
}

export default Choose;