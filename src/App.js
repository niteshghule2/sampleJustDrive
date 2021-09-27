// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customer from './Customer/';
import Admin from './Admin/';
import Dealer from './Dealer/';
import Login from './Customer/login.js';
import ALogin from './Admin/a_login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Customer/Compo/notfound/NotFound';
import DLogin from "./Dealer/d_login"
function App() {

  return (

    <div>
      <ToastContainer />
      <Router>
        <Switch>

          <Route exact path={["/", "/about", "/services", "/contact", "/bookings", "/profile", "/car_list", "/b_done"]} component={() => <Customer />} />
          <Route exact path={["/admin", "/a_car", "/a_all_bookings", "/a_all_dealers", "/a_all_customers", "/a_billing", "/a_add_dealer", "/a_all_city", "/a_add_city", "/a_all_cartype", "/a_all_message"]} component={() => <Admin />} />
          <Route exact path={["/dealer", "/d_car", "/d_all_bookings", "/d_pending_bookings", "/d_ongoing_bookings", "/d_completed_bookings", "/d_billing", "/d_notifications", "/d_car_add", "/d_profile"]} component={() => <Dealer />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/d_login" component={() => <DLogin />} />
          <Route exact path="/a_login" component={() => <ALogin />} />
          <Route path="*" component={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
