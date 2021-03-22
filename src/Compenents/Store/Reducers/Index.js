import { ADD_TO_CART } from "../Action/Types"

export default function Redusers(state , action)
{
     console.log(action ,)
    switch(action.type)
    {
        case  ADD_TO_CART : 
        return{
            cart:[
                  ...state.cart,
                  {

                    Produit:action.ProdactInfo,
                    Quantity:action.Quantity,
                   
                 
                  },
                 
                  
               
            ]
        }
      


        default:
        return state

    }

   
}