import {ADD_TO_CART} from './Types';


export  function addtocart(ProdactInfo, Quantity)
{
          return{
            type: ADD_TO_CART,
              ProdactInfo,
              Quantity
          };
}


