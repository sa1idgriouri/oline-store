import React from 'react'
import './cart.css'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

 function IconShopping(props) {
    return (
        <div>
              <Link to='/cart'>
                    <i className="fa fa-shopping-cart cart"></i>
                  <span  className="badge badge-danger">{props.TotalQ}</span>

              </Link>
        

        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
       TotalQ : state.cart.reduce((Total ,itme)=> Total+parseInt(itme.Quantity), 0)
    }

    
}

export default  connect(mapStateToProps)(IconShopping)
