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
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Copyright © 2021 ACTs | <a href="https://www.cdac.in/">CDAC</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
