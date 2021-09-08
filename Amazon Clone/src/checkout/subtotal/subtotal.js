import './subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context api/stateprovider';
import { getBasketTotal } from '../../Context api/reducer'
import { useHistory } from 'react-router';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    
    return ( 
        <div className="subtotal">            
            < CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <p>
                    Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input type="checkbox" />This order
                        conatins a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                />
                <button onClick={e => history.push('/payment')}>Proceed To Checkout</button>
        </div>
     );
}
 
export default Subtotal;