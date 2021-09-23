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
import Car from "./Component/d_car";



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
            {/* <Route exact path="/services" component={() => <Home />} /> */}
            {/* <Route exact path="/contact" component={() => <Contact />} /> */} 
             <Footer />
            </div>
           
            </div>
    );
}

export default Dealer;
