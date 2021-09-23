// import logo from "./logo.svg";
// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
// import { decrement } from "../actions";
// import { useHistory } from "react-router-dom"
import { Link, NavLink } from 'react-router-dom';
import IsLogin from './header/IsLogin';
import $ from "jquery"



function Header() {
    // const counter = useSelector((state) => state.counter);

    // const isLogged = useSelector((state) => state.isLogged);
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const home = () => {
    //     history.push('/')
    // }
    // const about = () => {
    //     history.push('/about')
    // }
    const toggal = () => {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    }
    return (
        <div>
            {/* <!-- ***** Preloader Start ***** --> */}
            {/* <div id="js-preloader" className="js-preloader" hidden="true">
                {/* {console.log(history)} */}
            {/* <div className="preloader-inner"> */}
            {/* <span className="dot"></span> */}
            {/* <div className="dots"> */}
            {/* <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> */}
            {/* </div> */}
            {/* <!-- ***** Preloader End ***** --> */}


            {/* <!-- ***** Header Area Start ***** --> */}

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to="/" className="logo">Just<em> Drive</em></Link>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    {/* className="active" */}
                                    <li><NavLink exact to="/" activeClassName="active" >Home</NavLink></li>
                                    {/* } */}
                                    <li><NavLink exact to="/service" activeClassName="active">Services</NavLink></li>
                                    <li><NavLink exact to="/offers" activeClassName="active">Offers</NavLink></li>
                                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                                    <IsLogin />
                                </ul>
                                <a href="#" className='menu-trigger' onClick={toggal}>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
