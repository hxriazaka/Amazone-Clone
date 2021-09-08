import { useStateValue } from '../Context api/stateprovider';
import './checkoutproduct.css'

const Checkoutproduct = ({id, img, title, price}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
    
    return ( 
        <div className="checkoutproduct">
            <img src={img} alt="" className='checkoutproduct-img' style={{width : '100%'}}/>
            <div className="checkoutproduct-info">
                <p className='checkoutproduct-title'>{title}</p>
                <p className='checkoutproduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct-rating'>
                    <p>⭐⭐⭐⭐</p>
                </div> 
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
     );
}
 
export default Checkoutproduct;