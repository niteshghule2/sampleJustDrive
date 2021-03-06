// css import
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/style.css";

//js file import
// import $ from "jquery";
// import "./assets/js/popper.js";
// import "./assets/js/bootstrap.min.js";

import { Route } from 'react-router-dom';
import Header from './Compo/header';
import Footer from './Compo/footer';
import Home from './Compo/home';
import About from './Compo/about';
import Contact from './Compo/contact';
import Bookings from './Compo/profile/booking'
import Profile from "./Compo/profile/profile";
import CarList from "./Compo/carList"
import BDone from "./Compo/success/b_done";


function Customer() {
    return (
        <div>
            {/* <Style> */}
            <Header />
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            {/* <Route exact path="/services" component={() => <Home />} /> */}
            <Route exact path="/contact" component={() => <Contact />} />
            <Route exact path="/bookings" component={() => <Bookings />} />
            <Route exact path="/profile" component={() => <Profile />} />
            <Route exact path="/car_list" component={() => <CarList />} />
            <Route exact path="/b_done" component={() => <BDone />} />
            <Footer />
            {/* </Style> */}
        </div>
    );
}

export default Customer;
