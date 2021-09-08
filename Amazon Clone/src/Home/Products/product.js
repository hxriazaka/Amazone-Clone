import { useStateValue } from "../../Context api/stateprovider";
import "./product.css"

const Product = ( {id, title, price , img } ) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
            },
        });
    };
    return ( 
        <div className="product">
            <div className="product-info">
                <p>{title}</p>           
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    <p>⭐⭐⭐⭐</p>
                </div>              
            </div>
            <img src={img} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
     );
}
 
export default Product;