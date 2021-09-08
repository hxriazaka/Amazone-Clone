import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/header';
import Checkout from './checkout/checkout';
import Login from './Login/login';
import Register from './Register/register'
import Home from './Home/home'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Context api/stateprovider';





function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{ //يقعد مكونيكتي مع حساب تعو refresh هنا نخلو مستخدم كيدير 
    auth.onAuthStateChanged(authUser => {
      console.log("the user is", authUser)
      if (authUser) {
        // if the user logged in

        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      } else {
        //if the user logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    < Router>
      <div className="App">
      < Switch >
      < Route path = '/register'>
            < Register />
      </Route>
      < Route path = '/login'>
            < Login />
      </Route>
      < Route path = '/checkout'>
        < Header />
        < Checkout />
      </Route>  
      <Route path= '/'>
        < Header />
        < Home />
      </Route> 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
