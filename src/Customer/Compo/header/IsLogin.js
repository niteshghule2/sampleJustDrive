import { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import "@popperjs/core";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../../assets/js/popper.js"
// import "../../assets/js/bootstrap.min.js"
// 
// import $ from 'jquery'
class IsLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            email: '',
            authenticate: false,
            logout: false
        }

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    componentDidMount = () => {
        if (sessionStorage.getItem("cid") !== null) {
            this.setState({
                id: sessionStorage.getItem("cid"),
                firstName: sessionStorage.getItem("cfname"),
                authenticate: true
            })

        }
    }

    render() {
        var logout = () => {

            this.state = {
                authenticate: false,
                logout: true
            }
            this.setState({ state: this.state })
            // alert(this.state.authenticate);
            sessionStorage.clear();
            toast.warning("Logout Successfully!");
            this.forceUpdateHandler();
        }
        if (this.state.logout) {
            return <Redirect to="/" />
        }
        if (sessionStorage.getItem("cid") !== null) {
            return (
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.firstName}</a>

                    <div class="dropdown-menu show-me">
                        <Link to="/profile" class="dropdown-item user_drop"> Profile</Link>
                        <Link to="/bookings" class="dropdown-item user_drop" > Bookings</Link>
                        <Link to="/" class="dropdown-item user_drop" onClick={logout}>Logout</Link>
                    </div>
                </li>
            );
        } else {
            return (
                <div className="main-button">
                    <Link to="/login">Login</Link>
                </div>
            );
        }

    }
}

export default IsLogin;