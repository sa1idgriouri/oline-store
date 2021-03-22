import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ItemsCart extends Component {
              
    state ={
        Quantity  : 0
    }
         
       Quantity = (event)  =>{
           const v =0
          v= this.props.TotalQ= event.target.value

          this.setState({
                Quantity : v
          })

       }        

                 
    render() {
        const {item} = this.props
        const {Produit} = item;
       

      
        return (
            <>

<tr>
                            <th scope="row">
                                <img  src={Produit.image} alt="" className="img-fluid z-depth-0" style={{ height: '20vh'  , width:'200px'}} />
                            </th>
                            <td>
                                <h5 className="mt-3">
                                    <strong>{Produit.name}</strong>
                                </h5>
                                <p className="text-muted">{Produit.name}</p>
                            </td>
                            <td>White</td>
                            <td></td>
                            <td>${Produit.price}</td>
                            <td>
                                {this.props.TotalQ}
                            </td>
                            <td className="font-weight-bold">
                                <strong>${this.props.TotalQ * Produit.price}</strong>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">X
                                </button>
                            </td>
                        </tr>  
                
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        TotalQ : state.cart.reduce((Total ,itme)=> Total+ parseInt(itme.Quantity), 0)
    }

    
}
export default connect(mapStateToProps)(ItemsCart)