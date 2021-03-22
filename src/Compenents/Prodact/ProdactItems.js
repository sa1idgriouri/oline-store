import React from 'react'
import './style.css'
import {Link} from "react-router-dom"

import {
  
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
   
  
  } from 'mdbreact';

export default function ProdactItems(props) {

    const {Produit} = props
    return (
        <div>
            

            <MDBCard cascade narrow ecommerce>
                  <div className="images">
                  <MDBCardImage
                  cascade
                  className="images"
                  src={Produit.image}
                  top
                  alt='sample photo'
                  overlay='white-slight'
                />

                  </div>
               
                <MDBCardBody cascade className='text-center'>
                  <a href='#!' className='grey-text'>
                    <h5>{Produit.name}</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href='#!'>{Produit.name}</a>
                    </strong>
                  </MDBCardTitle>
                
                  <MDBCardText>{Produit.description}</MDBCardText>
             
                    <span className='float-left font-weight-bold'>
                      <strong>{Produit.price}$</strong>
                    </span>

                    
                    <span className='float-right'>
                      <Link className="btn btn-primary" to={"/details/"+Produit.id} >Details</Link>
                    </span>
               
                </MDBCardBody>
              </MDBCard>
        </div>
    )
}

