import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemsCart from  './ItemsCart'

 class Cart extends Component {
       

    render() {
        return (
            <>
            <div>
                <div className="row">


<div className="col-md-12 my-3 text-left">

    <div className="card">
        <div className="card-body">

        
            <div className="table-responsive">

                <table className="table product-table">

                
                    <thead className="mdb-color lighten-5">
                        <tr>
                            <th></th>
                            <th className="font-weight-bold">
                                <strong>Product</strong>
                            </th>
                            <th className="font-weight-bold">
                                <strong>Color</strong>
                            </th>
                            <th></th>
                            <th className="font-weight-bold">
                                <strong>Price</strong>
                            </th>
                            <th className="font-weight-bold">
                                <strong>QTY</strong>
                            </th>
                            <th className="font-weight-bold">
                                <strong>Amount</strong>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                 
                    <tbody>

                     
                      
                   
                   
                      
                       

                      {this.props.CartItmes.map((item) =>
                      
                           <ItemsCart  item={item} />
                      ) 
                         
                          
                         
                      
                      }
                        <tr>
                            <td colspan="3"></td>
                            <td>
                                <h4 className="mt-2">
                                    <strong>Total</strong>
                                </h4>
                            </td>
                            <td className="text-right">
                                <h4 className="mt-2">
                                    <strong>${this.props.TotalG}</strong>
                                </h4>
                            </td>
                            <td colspan="3" className="text-right">
                                <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Complete
                                    purchase
                                    <i className="fa fa-angle-right right"></i>
                                </button>
                            </td>
                        </tr>
                     

                    </tbody>
                 

                </table>

            </div>
       

        </div>

    </div>

</div>


</div>
            </div>
            </>
        )
    }
}

  const mapStateToProps =(state) =>{
     return {
        CartItmes: state.cart, 
      TotalG:state.cart.reduce((Total , itmes)=> Total + parseInt(itmes.Quantity) * parseInt(itmes.Produit.price) ,0 )
     };

  }

export default connect(mapStateToProps)(Cart)
