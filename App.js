import './App.css';
// import Register from './Component/Register'
import Login from './Component/Login'
// import Test from './Component/Test'
import Flogin from './Component/FLogin'
import FSignup from './Component/FSignup'
import Profile from './Component/Profile'
import Products from './Component/Products'
import Vaccine from './Component/Vaccine'
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import Plist from './Component/Plist'

function App() {
  
  return (
    <>

    <Provider store={store}>
      <Vaccine />
    </Provider>


      {/* <Switch>
      <Route path="/" component={Flogin} exact />
      <Route path="/FSignup" component={FSignup} /> 
      <Route path="/Profile" component={Profile} /> 
      <Route path="/Products" component={Products} /> 
      <Route path="/Vaccine" component={Vaccine} /> 
      </Switch> */}
    </>
  );
}

export default App;
