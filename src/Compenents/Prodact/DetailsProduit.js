import React, { Component } from 'react'
import {GetProdact} from '../../Api/Prodact'
import './Details.css'
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  
  } from 'mdbreact';
import { connect } from 'react-redux';

import {addtocart} from '../Store/Action/Action'

 class DetailsProduit extends Component {
    state ={
        Produit :{},
        Quantity :0
    }
    componentDidMount (){
        const ID= this.props.match.params.id
        GetProdact(ID).then(Produit =>{
            this.setState({
              Produit:Produit
             
             
                
               
            })
        })
    }
      Quantity = (event) =>{
        const value = event.target.value
        if (value <0)
        {
          return
        }
        this.setState({
       

            Quantity:value
           
          
         
        })
      }


      AddToCart =(Produit)=>
      {
        this.props.addtocart1(Produit ,this.state.Quantity) 
      }

    render() {

      const Produit = this.state.Produit;
        return (
            <div>
                 <MDBRow className="mt-5">
          
              <MDBCol lg='6'  className='mb-lg-0 '>
                    
                  <MDBCardImage className="im"
                  cascade
                 
                  src={Produit.image}
                  top
                  alt='sample photo'
                  overlay='white-slight'
                  
                />
               

               
                      
            </MDBCol>


            <MDBCol lg='6' md='16' className='mb-lg-0 '>
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
             
                    <span className=' font-weight-bold '>
                       price :  <strong>{Produit.price}$</strong>
                       <br></br>
                       <label>Qnantity</label>
                        <input onChange={this.Quantity}  type="number" />
                        <br />
                     Total :  <strong>{ 
                     this.state.Quantity >0 ? this.state.Quantity * Produit.price :0 }$</strong>
                    </span>
                     
                
                       <button className="btn btn-primary btn-block" onClick={()=>{this.AddToCart(Produit)}}>Add To cart</button>
               
                </MDBCardBody>
         

         
                
      </MDBCol>
              
              
              
          
     
        
      </MDBRow>

                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>
{
  return{
    addtocart1:(ProdactInfo,Quantity)=>dispatch(addtocart(ProdactInfo,Quantity)),
 };
 
}

export default connect(null , mapDispatchToProps)(DetailsProduit)
