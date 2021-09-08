import './header.css'
import amazonicon from './imgs/amazonicon.png'
import SearchIcon from '@material-ui/icons/Search';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context api/stateprovider';
import { auth } from '../firebase';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user){
            auth.signOut();
        }
    }

    return ( 
        <div className="head">
            <Link to='/'> 
                <img src={amazonicon} alt="" className='head-logo'/>
            </Link>
            <div className="head-search">
                <input type="text" className='headsearch-input'/>
                < SearchIcon className='headsearch-icon'/>
            </div>
            <div className="head-nav">
                <Link to={!user && '/login'}> 
                    <div onClick={handleAuth} className="head-opt">
                        <span className='headopt-line1'>Hello, {!user ? 'Guest' : user?.email}</span>
                        <span className='headopt-line2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="head-opt">
                    <span className='headopt-line1'>Returns</span>
                    <span className='headopt-line2'>& Orders</span>
                </div>
                <div className="head-opt">
                    <span className='headopt-line1'>Your</span>
                    <span className='headopt-line2'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="headopt-basket">
                        < LocalGroceryStoreIcon />
                        <span className='headopt-line2 basketcont'>{basket?.length}</span>    
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;