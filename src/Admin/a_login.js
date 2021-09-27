// css import
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.css";
import React, { Component } from "react";
import { toast } from 'react-toastify';
import api from "../service/AdminApiService"
import "../Customer/login.css";
import {Redirect} from "react-router-dom"

//js file import
// import $ from "jquery";

// import { Link } from 'react-router-dom';
// import Header from './Compo/header';
// import Footer from './Compo/footer';
// import Home from './Compo/home';
// import About from './Compo/about';
// import Contact from './Compo/contact';


// function Login() {
    class ALogin extends Component{
        constructor(props){
            super(props)
            this.state={
               
                email:'',
                password:'',
                msg:'',
                authenticate: false,
                url: ''

            }
           // this.login=this.login.bind(this);
        }
        login = (e) => {
            e.preventDefault();
            if ((this.state.email !== '') && (this.state.password !== '')) {
                api.loginAdmin(this.state.email, this.state.password)
                    .then(resp => {
                        // console.log(resp.data);//actual response data sent by back end
                        sessionStorage.setItem("aid", resp.data.id);
                        sessionStorage.setItem("afname", resp.data.name);
                        sessionStorage.setItem("aemail", resp.data.email);
                        this.setState({ authenticate: true, url: '/admin' })
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
            // console.log(this.state)
        }

       
        onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
        }

        componentDidMount = () => {
            // console.log(sessionStorage.getItem("cid"));
            if (sessionStorage.getItem("aid") !== null) {
                // console.log(JSON.stringify(sessionStorage.getItem("user")));
                this.setState({ authenticate: true, url: '/admin' })
            }
        }
        render(){
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
                        <p>to <br/><h3>JustDrive!</h3></p>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <h3 className="login-heading">Admin Login</h3>
                                <div className="row register-form">
                                    <div className="col-md-12 profile_card">
                                        <form className="form my-form" >
                                            <div className="form-group my-row">
                                                <i className="fa fa-envelope-o ico"></i>
                                                <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Email" onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group my-row">
                                                <i className="fa fa-lock ico"></i>
                                                <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Password *" onChange={this.onChange}/>
                                            </div>
                                            <div className="float-right">
                                                <input type="submit" className="btn btn-primary" value="Login" onClick={this.login}  />
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
        // </div>
    );
}
}


export default ALogin;
