import React from 'react'
import { ReactDOM } from 'react';
import "../../index.css";
import border1 from "../images/border1.png";
import ServiceContent from './ServiceContent';

const Service = () => {
  return (
    <>
     <div id='service'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 text-center'>
                    <h1><span className='text-dark'>Our</span> <span className="txt-custom">Services</span></h1>
                    <img src={border1} alt=""/>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div> 
        <div className='service-content'>
        <div className='container py-5'>
               <div className='row text-center'>
                   <ServiceContent/>
                </div>
            </div>
        </div> 
     </div>
    </>
    
  )
}

export default Service;