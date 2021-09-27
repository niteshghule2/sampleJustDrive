// import logo from "./logo.svg";
import "./header.css";

import { useHistory } from "react-router-dom"
// import { Link, NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


function Header() {

  const history = useHistory();
  if (sessionStorage.getItem("aid") === null) {
    history.push("/a_login")
  }
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
        <Link to="/admin"><center><h2>JustDRIVE</h2></center></Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item  ">
            <NavLink className="nav-link  " exact to="/admin" activeClassName="active">
              <i className="material-icons">dashboard</i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/a_all_bookings" activeClassName="active">
              <i className="material-icons">content_paste</i>
              All Bookings
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/a_all_dealers" activeClassName="active">
              <i className="material-icons">library_books</i>
              List of Dealers
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/a_all_customers" activeClassName="active">
              <i className="material-icons">groups</i>
              List of Customers
            </NavLink>
          </li>

          <li className="nav-item   ">
            <NavLink className="nav-link " exact to="/a_car" activeClassName="active">
              <i className="material-icons">directions_car</i>
              {/* <i class="fa-solid fa-cars"></i> */}
              List of Car
            </NavLink>
          </li>



          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/a_all_city" activeClassName="active" >
              <i className="material-icons">location_ons</i>
              List of Cities
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/a_all_cartype" activeClassName="active" >
              <i className="material-icons">garage</i>
              List of CarType
            </NavLink>


          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/a_all_message" activeClassName="active" >
              <i className="material-icons">email</i>
              Feedback Messages
            </NavLink>


          </li>
        </ul>
      </div>
    </div>



  );
}

export default Header;
