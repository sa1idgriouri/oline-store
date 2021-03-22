import  {createStore} from 'redux';
import  Redusers from './Reducers/Index'
const initialstate ={
    cart:[] 
}




const Store = createStore(Redusers , initialstate)

export default Store