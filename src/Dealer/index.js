// css import
import "./assets/img/apple-icon.png";
import "./assets/img/favicon.png";
import "./assets/css/material-dashboard.css?v=2.1.2";
import "./assets/demo/demo.css";
// import bg from "./assets/img/city.jpg";


//js file import
// import $ from "jquery";
// import "./assets/js/core/jquery.min.js";




import { Route } from 'react-router-dom';
import Sidebar from './Component/sidebar';
import Footer from './Component/footer';
import Home from './Component/home';
import Navbar from "./Component/navbar";
// import { Callbacks } from "jquery";
import Car from "./Component/d_car";
import BookingList from "./Component/d_all_bookings";
import PendingBookingList from "./Component/d_pending_bookings";
import CompletedBookingList from "./Component/d_completed_bookings copy";
import CarAdd from "./Component/d_car_add";
import DProfile from "./Component/d_profile";
import OngoingBookingList from "./Component/d_ongoing_bookings";



function Dealer() {
    // const style={
    //     width: "calc(100% - 265px)",
    //     marginLeft: "265px",
    // style={{backgroundImage:`url(${bg})` }}
    // };
    return (
        <div class="wrapper " >
            <Sidebar />
            <Navbar />
            <div className="content my-content"  >
                <Route exact path="/dealer" component={() => <Home />} />
                <Route exact path="/d_car" component={() => <Car />} />
                <Route exact path="/d_all_bookings" component={() => <BookingList />} />
                <Route exact path="/d_pending_bookings" component={() => <PendingBookingList />} />
                <Route exact path="/d_ongoing_bookings" component={() => <OngoingBookingList />} />
                <Route exact path="/d_completed_bookings" component={() => <CompletedBookingList />} />
                <Route exact path="/d_car_add" component={() => <CarAdd />} />
                <Route exact path="/d_profile" component={() => <DProfile />} />
                {/* <Route exact path="/services" component={() => <Home />} /> */}
                {/* <Route exact path="/contact" component={() => <Contact />} /> */}
                <Footer />
            </div>

        </div>
    );
}

export default Dealer;
