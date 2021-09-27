// css import
import "./assets/img/apple-icon.png";
import "./assets/img/favicon.png";
import "./assets/css/material-dashboard.css?v=2.1.2";
import "./assets/demo/demo.css";
import bg from "./assets/img/city.jpg";


//js file import
// import $ from "jquery";
// import "./assets/js/core/jquery.min.js";




import { Route } from 'react-router-dom';
import Sidebar from './Component/sidebar';
import Footer from './Component/footer';
import Home from './Component/home';
import Navbar from "./Component/navbar";
import { Callbacks } from "jquery";
import Car from "./Component/a_car";
import BookingList from "./Component/a_all_bookings";
import DealerList from "./Component/a_all_dealers";
import CustomerList from "./Component/a_all_customers";
import DealerAdd from "./Component/a_add_dealer";
import CityList from "./Component/a_all_city"
import CityAdd from "./Component/a_add_city";
import CarTypeList from "./Component/a_all_cartype";
import MessageList from "./Component/a_all_message"
//need to import DealerList and CustomerList here


function Admin() {
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
            <Route exact path="/admin" component={() => <Home />} />
            <Route exact path="/a_car" component={() => <Car/>} />
            <Route exact path="/a_all_bookings" component={() => <BookingList/>} />
             <Route exact path="/a_all_dealers" component={() => <DealerList/>} />
             <Route exact path="/a_all_customers" component={() => <CustomerList/>} /> 
             <Route exact path="/a_add_dealer" component={() => <DealerAdd/>} /> 
             <Route exact path="/a_all_city" component={() => <CityList />} /> 
             <Route exact path="/a_add_city" component={() => <CityAdd/>} /> 
             <Route exact path="/a_all_cartype" component={() => <CarTypeList/>} />
             <Route exact path="/a_all_message" component={() => <MessageList/>} />

 
             <Footer />
            </div>
           
            </div>
    );
}

export default Admin;
