// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customer from './Customer/';
import Admin from './Admin/';
import Dealer from './Dealer/';
import Login from './Customer/login.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path={["/", "/about", "/services", "/contact"]} component={() => <Customer />} />
          <Route exact path="/admin" component={() => <Admin />} />
          <Route exact path={["/dealer", "/d_car", "/d_all_bookings", "/d_pending_bookings", "/d_completed_bookings", "/d_billing", "/d_notifications"]} component={() => <Dealer />} />
          <Route exact path="/login" component={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
