import './login.css'
import amzlogo from './imgs/amazoniconb.png'
import { Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) =>{
        e.preventDefault() // refresh هاذي تخلي صفحة مديرش 

        // firebase
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => { //للمعلومات نتاع مستخدم جديد object هنا نديرو 
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }


    return (        
        <div className="login">
            <Link to='/'>
            <img src={amzlogo} alt="" className='login-logo'/>
            </Link>
            <div className="container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='signinbtn' type='submit'
                    onClick={signIn}>Sign In</button>
                    <p>By continuing, you agree 
                        to Amazon's Conditions of Use and Privacy Notice.</p>
                </form>
            </div>
            <form className="createform">
                <p>New to Amazon?</p>
                <Link to='/register'>
                <button className='createbtn' type='submit'>Create your Amazon account</button>
                </Link>
            </form>
            <p className='zaki'>Created by Zakaria Belamri</p>
        </div>
        
     );
}
 
export default Login;