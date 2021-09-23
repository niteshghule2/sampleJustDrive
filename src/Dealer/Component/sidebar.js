// import logo from "./logo.svg";
 import "./header.css";


// import { useHistory } from "react-router-dom"
// import { Link, NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


function Header() {
    // const counter = useSelector((state) => state.counter);

    // const isLogged = useSelector((state) => state.isLogged);
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const path = history.location.pathname;
    // const home = () => {
    //     history.push('/')
    // }
    // const about = () => {
    //     history.push('/about')
    // }
    return (
        // <div>
            // {/* <div className="wrapper "> */}
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      {/* <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    --> */}
      <div className="logo">
      <Link to="/dealer"><center><h2>JustDRIVE</h2></center></Link>
        </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item  ">
            <NavLink className="nav-link  " exact to="/dealer" activeClassName="active">
              <i className="material-icons">dashboard</i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item   ">
            <NavLink className="nav-link " exact to="/d_car" activeClassName="active">
              <i className="material-icons">person</i>
              {/* <i class="fa-solid fa-cars"></i> */}
              Car
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/d_all_bookings" activeClassName="active">
              <i className="material-icons">content_paste</i>
              All Bookings
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/d_pending_bookings" activeClassName="active">
              <i className="material-icons">library_books</i>
              Pending Bookings
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/d_completed_bookings" activeClassName="active">
              <i className="material-icons">bubble_chart</i>
              Completed Bookings
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/d_billing" activeClassName="active" >
              <i className="material-icons">location_ons</i>
              Invoice Bill
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/d_notifications" activeClassName="active" >
              <i className="material-icons">notifications</i>
              Notification
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    
     
    
    );
}

export default Header;
