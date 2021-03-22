import React, { Component } from 'react';
import {GetAllProdact} from '../../Api/Prodact';
import {
    MDBRow,
    MDBCol,
 
  
  } from 'mdbreact';
import ProdactItems from './ProdactItems';

export default class Prodact extends Component {

    state ={
        prodact :[]
    }

 componentDidMount (){
        GetAllProdact().then(res =>{
            this.setState({
                prodact : res
            })
        })
    }
    render() {
        return (
            <div>
           
     
      <MDBRow className="mt-5">
          {
              this.state.prodact.map((prodact , index)=>
              <MDBCol lg='4' md='6' className='mb-lg-0 ' key={index}>
                   <ProdactItems Produit= {prodact} />
            </MDBCol>
              
              
              )
          }
     
        
      </MDBRow>
 
            </div>
        )
    }
}
