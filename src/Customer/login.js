import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./login.css";
import api from "../service/CustomerApiService"
import { toast } from 'react-toastify';
import $ from "jquery"
import loader from "./assets/images/loader.gif"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPass: '',
            mobile: '',
            msg: '',
            authenticate: false,
            url: '',
            restInput: '',
            otp: '',
        }
    }




    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //component mount
    componentDidMount = () => {
        // console.log(sessionStorage.getItem("cid"));
        if (sessionStorage.getItem("cid") !== null) {
            // console.log(JSON.stringify(sessionStorage.getItem("user")));
            this.setState({ authenticate: true, url: '/' })
        }
    }
    restClick = () => {
        if (this.state.email === '' || this.state.password === '') {
            toast.warning("Email and Password are not empty!")
        } else {
            // toast.promise("Progress")
            var obj = { "to": this.state.email }
            api.resetEmailSend(obj)
                .then(resp => {
                    window.$("#exampleModal1").modal();
                    toast.success(resp.data)
                    console.log(resp.data)
                })
                .catch(err => {
                    toast.error(" OTP Not Send!")
                    console.log(err.data)
                })
        }
    }

    finalCheck = () => {
        if (this.state.otp !== '' || this.state.otp !== null) {
            var obj = {
                "to": this.state.email,
                "subject": this.state.otp,
                "message": this.state.password
            }
            api.resetOtpCheckPassword(obj)
                .then(resp => {
                    // console.log(resp.data);//actual response data sent by back end
                    sessionStorage.setItem("cid", resp.data.id);
                    sessionStorage.setItem("cfname", resp.data.firstName);
                    sessionStorage.setItem("cemail", resp.data.email);
                    this.setState({ authenticate: true, url: '/' })
                    toast.success("Login Successfully!");
                })
                .catch(err => {
                    console.error(err);
                    toast.error(err.response.data.message);
                })
        } else {
            toast.warning("Enter Otp")
        }
    }
    signUpOtpSend = () => {
        if (this.state.password !== this.state.confirmPass) {
            toast.warning("Password and confirm password are not match!");
        } else {
            // toast.promise("Progress")
            var obj = { "to": this.state.email }
            api.signupOtpSend(obj)
                .then(resp => {
                    window.$("#exampleModal2").modal();
                    toast.success(resp.data)
                    console.log(resp.data)
                })
                .catch(err => {
                    toast.error(err.response.data.message)
                    console.log(err.response.data.message)
                })
        }
    }
    singupOtpCheck = () => {
        if (this.state.otp !== '' || this.state.otp !== null) {
            var customer = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, mobile: this.state.mobile };
            api.signupOtpCheck(this.state.otp, customer)
                .then(resp => {
                    // console.log(resp.data);//actual response data sent by back end
                    sessionStorage.setItem("cid", resp.data.id);
                    sessionStorage.setItem("cfname", resp.data.firstName);
                    sessionStorage.setItem("cemail", resp.data.email);
                    this.setState({ authenticate: true, url: '/' })
                    toast.success("Signup Successful!");
                })
                .catch(err => {
                    console.error(err.response.data.message);
                    toast.error(err.response.data.message);
                })
        } else {
            toast.warning("Enter Otp")
        }

    }
    render() {
        var login = (e) => {
            e.preventDefault();
            if ((this.state.email !== '') && (this.state.password !== '')) {
                api.loginCustomer(this.state.email, this.state.password)
                    .then(resp => {
                        // console.log(resp.data);//actual response data sent by back end
                        sessionStorage.setItem("cid", resp.data.id);
                        sessionStorage.setItem("cfname", resp.data.firstName);
                        sessionStorage.setItem("cemail", resp.data.email);
                        this.setState({ authenticate: true, url: '/' })
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
        // var signUp = (e) => {
        //     if ((this.state.firstName !== '') && (this.state.lastName !== '') && (this.state.email !== '') && (this.state.password !== '') && (this.state.confirmPass !== '')) {
        //         if (this.state.password !== this.state.confirmPass) {
        //             toast.warning("Password and confirm password are not match!");
        //         } else {
        //             var customer = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, mobile: this.state.password };
        //             api.signupCustomer(customer)
        //                 .then(resp => {
        //                     sessionStorage.setItem("cid", resp.data.id);
        //                     sessionStorage.setItem("cfname", resp.data.firstName);
        //                     sessionStorage.setItem("cemail", resp.data.email);
        //                     this.setState({ authenticate: true, url: '/' })
        //                     toast.success("Login Successfully!");
        //                 }).catch(err => {
        //                     console.error(err);
        //                     this.setState({ msg: err.response.data.message });
        //                     toast.error(err.response.data.message);
        //                 })


        //             // this.setState({
        //             //     msg: ''
        //             // })
        //             // this.props.history.push("/")
        //         }

        //     } else {
        //         toast.warning("All field are required!");
        //         this.setState({
        //             msg: 'all field are required'
        //         })
        //     }
        //     e.preventDefault();
        //     console.log(this.state)
        // }
        if (this.state.authenticate) {
            window.$("#exampleModal2").modal('hide');
            window.$("#exampleModal1").modal('hide');
            return <Redirect to={this.state.url} />;
            // this.props.history.push(this.state.url);
        }
        const resetState = () => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPass: '',
                mobile: '',
                dlnumber: '',
                dlimage: '',
                msg: '',
                authenticate: false,
                url: ''
            })
        }
        const loginClick = () => {
            // return <Redirect to="../dealer" />
            document.getElementById("login-tab").classList.add("active");
            document.getElementById("login").classList.add("active");
            document.getElementById("newuser-tab").classList.remove("active");
            document.getElementById("newuser").classList.remove("active");
            resetState();
        }
        const regClick = () => {
            document.getElementById("login-tab").classList.remove("active");
            document.getElementById("login").classList.remove("active");
            document.getElementById("newuser-tab").classList.add("active");
            document.getElementById("newuser").classList.add("active");
            resetState();
        }

        const showPass = () => {
            $(this).toggleClass('active');
            // alert($('#lpass').attr("type"));
            if ($('#lpass').attr("type") === 'password') {
                $('#lpass').attr("type", "text");
                $('#togglePassword').removeClass("fa-eye-slash");
                $('#togglePassword').addClass("fa-eye");
            } else {
                $('#togglePassword').removeClass("fa-eye");
                $('#togglePassword').addClass("fa-eye-slash");
                $('#lpass').attr("type", "password");
            }
        }
        return (
            <div>
                {/* Login */}
                <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Reset Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" id="modal-body1">
                                <div className="form my-form" >
                                    <div className="form-group my-row">
                                        <input type="number" name="otp" value={this.state.otp} className="form-control" placeholder="Enter OTP" onChange={this.onChange} />
                                    </div>
                                    <div className="float-right">
                                        <input type="submit" name="emailReset" className="btn btn-primary" value="Verify & Reset Password" onClick={this.finalCheck} />
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* SignUp */}
                <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">OTP Verification</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" id="modal-body1">
                                <div className="form my-form" >
                                    <div className="form-group my-row">
                                        <input type="number" name="otp" value={this.state.otp} className="form-control" placeholder="Enter OTP" onChange={this.onChange} />
                                    </div>
                                    <div className="float-right">
                                        <input type="submit" name="emailReset" className="btn btn-primary" value="Verify OTP" onClick={this.singupOtpCheck} />
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid register">
                    <div className="row">
                        <div className="col-md-4 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            {/* <img className="img" src={loader} alt="" /> */}
                            <h3>Welcome</h3>
                            <p>Start Journey With JustDrive!</p>
                        </div>
                        <div className="col-md-8 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <div className="nav-link active" id="login-tab" data-toggle="tab" role="tab" aria-controls="login" aria-selected="true" onClick={loginClick}>Login</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" id="newuser-tab" data-toggle="tab" role="tab" aria-controls="newuser" aria-selected="false" onClick={regClick}>Sign Up</div>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <h3 className="login-heading">Login</h3>
                                    <div className="row register-form">
                                        <div className="col-md-12 profile_card">
                                            <div className="form my-form" >
                                                <div className="form-group my-row">
                                                    <i className="fa fa-envelope-o ico"></i>
                                                    <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Email" onChange={this.onChange} />
                                                </div>
                                                <div className="form-group my-row">
                                                    <i className="fa fa-lock ico"></i>
                                                    <input type="password" name="password" id="lpass" value={this.state.password} className="form-control" placeholder="Password *" onChange={this.onChange} />
                                                    <i class="fa fa-eye-slash ico2" id="togglePassword" onClick={showPass}></i>
                                                </div>
                                                <div className="float-right">
                                                    <input type="submit" className="btn btn-primary" value="Login" onClick={login} />
                                                    {/* data-toggle="modal" data-target="#exampleModal1" */}
                                                    <input type="submit" style={{ background: "#ed563b" }} className="btn btn-primary" value="Reset" onClick={this.restClick} />

                                                </div>
                                                {/* <div className="float-right">
                                                    <span id="loginMsg" >{this.state.msg}</span>
                                                </div> */}
                                                <div className="form-group" style={{ marginTop: "70px" }}>
                                                    <span style={{ fontSize: '10px', lineHeight: "1px" }}>* For reset password please enter existing Email Id & new password, Then click on reset Button.</span>
                                                    {/* <a href="#" className="form" data-toggle="modal" data-target="#exampleModal1" onClick={this.state}>Forgot Password?</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="newuser" role="tabpanel" aria-labelledby="newuser-tab">
                                    <h3 className="register-heading">New User</h3>
                                    <div className="row register-form my-reg-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="firstName" value={this.state.firstName} className="form-control" placeholder="First Name *" onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="lastName" value={this.state.lastName} className="form-control" placeholder="Last Name *" onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Email *" onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="mobile" value={this.state.mobile} maxLength="10" minLength="10" className="form-control" placeholder="Phone *" onChange={this.onChange} />
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Password *" onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="confirmPass" className="form-control" value={this.state.confirmPass} placeholder="Confirm Password *" onChange={this.onChange} />
                                            </div>

                                            <div className="float-right">
                                                <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.signUpOtpSend} />
                                            </div>
                                            <br />

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Login;
