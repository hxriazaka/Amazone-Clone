import { useStateValue } from '../Context api/stateprovider';
import './checkout.css'
import Checkoutproduct from './checkoutproduct';
import Subtotal from './subtotal/subtotal';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return ( 
        <div className="checkout">
            <div className="checkout-left">
                <h3>Hello, {user?.email}</h3>
                <div className="checkout-title">
                    <h2>Your Shopping Basket</h2>
                </div>
                {basket.map(item => (
                        < Checkoutproduct 
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                        />
                    ))}
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
     );
}
 
export default Checkout;