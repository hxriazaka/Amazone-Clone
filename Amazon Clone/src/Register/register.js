import './register.css'
import amzlogo from './imgs/amazoniconb.png'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { useState } from 'react';

const Register = () => {
    const history = useHistory();
    const [name,setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) =>{
        e.preventDefault() // refresh هاذي تخلي صفحة مديرش 

        // firebase

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => { //للمعلومات نتاع مستخدم جديد object هنا نديرو 
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message)) // في حالة وجود خطا نبعتو رسالة للمستخدم

    }


    return ( 
        <div className="register">
            <Link to='/'>
                <img src={amzlogo} alt="" className='register-logo'/>
            </Link>
            <div className="register-container">
                <h1>Create account</h1>
                <form>
                    <h5>Your name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" placeholder='At least 6 characters' value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={register} className='registerbtn' type='submit'>Create your Amazon account</button>
                    <p>By continuing, you agree 
                        to Amazon's Conditions of Use and Privacy Notice.</p>
                </form>
            </div>
            <div className="registerbottom">
                <h5>Already have an account?</h5>
                <Link to ='/login'>
                <p>Sign-In</p>
                </Link>
            </div>
        </div>
     );
}
 
export default Register;