// import logo from "./logo.svg";
// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
// import { decrement } from "../actions";
// import { useHistory } from "react-router-dom"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Footer() {
    // const counter = useSelector((state) => state.counter);

    // const isLogged = useSelector((state) => state.isLogged);
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const clicks = () => {
    //     history.push('/dealer')
    // }
    return (
        <div >
            {/* <!-- ***** Footer Start ***** --> */}
            <footer className="footer">
        <div className="container-fluid">
          {/* <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  JustDRIVE
                </a>
              </li>
              <li>
                <a href="https://creative-tim.com/presentation">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav> */}
          <div className="copyright ">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, made with <i className="material-icons">favorite</i> by
            CDAC-ACTs Students for a better journey.
          </div>
        </div>
      </footer>
        </div>
    );
}

export default Footer;
