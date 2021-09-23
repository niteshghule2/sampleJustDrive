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



function Customer() {
    return (
        <div>
            {/* <Style> */}
            <Header />
            <Route exact path="/" component={() => <Home />} />
            <Route path="/about" component={() => <About />} />
            {/* <Route exact path="/services" component={() => <Home />} /> */}
            <Route exact path="/contact" component={() => <Contact />} />
            <Footer />
            {/* </Style> */}
        </div>
    );
}

export default Customer;
