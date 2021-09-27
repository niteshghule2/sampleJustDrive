// css import
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.css";
import React, { Component } from "react";
import "../Customer/login.css";
import { Redirect } from 'react-router-dom'
import api from "../service/DealerApiService"
import { toast } from 'react-toastify';
// import $ from "jquery"

//js file import
// import $ from "jquery";

// import { Link } from 'react-router-dom';
// import Header from './Compo/header';
// import Footer from './Compo/footer';
// import Home from './Compo/home';
// import About from './Compo/about';
// import Contact from './Compo/contact';


// function Login() {
class DLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {

            email: '',
            password: '',
            msg: '',
            authenticate: false,
            url: ''
        }
        this.login = this.login.bind(this);
    }
    login = (e) => {
        e.preventDefault();
        if ((this.state.email !== '') && (this.state.password !== '')) {
            api.loginDealer(this.state.email, this.state.password)
                .then(resp => {
                    // console.log(resp.data);//actual response data sent by back end
                    sessionStorage.setItem("did", resp.data.id);
                    sessionStorage.setItem("dname", resp.data.name);
                    sessionStorage.setItem("demail", resp.data.email);
                    this.setState({ authenticate: true, url: '/dealer' })
                    toast.success("Login Successfully!");
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ msg: err.response.data.message });
                    toast.error(err.response.data.message);
                })


        } else {
            toast.warning("All field are required!");
            this.setState({
                msg: 'email id and password cannot be empty'
            })
        }

    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //component mount
    componentDidMount = () => {
        // console.log(sessionStorage.getItem("cid"));
        if (sessionStorage.getItem("did") !== null) {
            // console.log(JSON.stringify(sessionStorage.getItem("user")));
            this.setState({ authenticate: true, url: '/dealer' })
            toast.success("Already Logged in")
        }
    }

    render() {
        if (this.state.authenticate) {
            return <Redirect to={this.state.url} />;
            // this.props.history.push(this.state.url);
        }

        return (
            <div>
                <div className="container-fluid register">
                    <div className="row">
                        <div className="col-md-4 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>
                            <p>to <br /><h3>JustDrive!</h3></p>
                        </div>
                        <div className="col-md-8 register-right">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <h3 className="login-heading">Dealer Login</h3>
                                    <div className="row register-form">
                                        <div className="col-md-12 profile_card">
                                            <form className="form my-form" >
                                                <div className="form-group my-row">
                                                    <i className="fa fa-envelope-o ico"></i>
                                                    <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Email" onChange={this.onChange} />
                                                </div>
                                                <div className="form-group my-row">
                                                    <i className="fa fa-lock ico"></i>
                                                    <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Password *" onChange={this.onChange} />
                                                </div>
                                                <div className="float-right">
                                                    <input type="submit" className="btn btn-primary" value="Login" onClick={this.login} />
                                                </div>
                                                <div className="float-right">
                                                    <span id="loginMsg" >{this.state.loginMsg}</span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default DLogin;
