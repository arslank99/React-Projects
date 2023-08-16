import React from 'react'
import { ReactDOM } from 'react';
import border1 from "../images/border1.png";
import StyledComponents from '../StyledComponent';
import "../../index.css";

const Provide = () => {
  return (
    <>
      <div id='provide'>
        <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center'>
                        <h1><span className='text-dark'>We Are Providing Best </span> <span className="txt-custom">Quality Service</span></h1>
                        <img src={border1} alt=""/>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div> 
            <div className='container-fluid py-3'>
                <div className='row'>
                    <div className='col-md-12 p-0'>
                      <div id="bg-img">
                        <StyledComponents>
                          <div className='provide-content'>
                            <h3 className='pt-5'>Clean Quality</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                            <button className='btn btn-light'>Get a Quote</button>
                          </div>
                        </StyledComponents>
                      </div>
                    </div>
                </div>
            </div> 
      </div>  
    </>

  )
}


export default Provide;
