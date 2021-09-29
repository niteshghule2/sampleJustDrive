
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import $ from "jquery"
import "./profile.css"
import "datatables.net"
import api from "../../../service/CustomerApiService"
import { toast } from 'react-toastify';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            dlNumber: '',
            dlImg: '',
            authenticate: (sessionStorage.getItem("cid") !== null),
        }
    };
    componentDidMount = () => {

        if (sessionStorage.getItem("cid") !== null) {
            this.setState({
                id: sessionStorage.getItem("cid"),
                firstName: sessionStorage.getItem("cfname"),
                authenticate: true
            });
            api.fetchCustomerById(sessionStorage.getItem("cid"))
                .then(resp => {
                    console.log(resp.data)
                    this.setState({
                        lastName: resp.data.lastName,
                        email: resp.data.email,
                        mobile: resp.data.mobile,
                        dlNumber: resp.data.drivingLicenseNo,
                        dlImg: resp.data.drivingLicenceImage
                    })
                })
                .catch(err => {
                    toast.error("Something Wrong!")
                    console.log(err.data)
                });
        }
    }
    onchnage = (e) => {
        this.setState({ dlNumber: e.target.value })
    }
    update = () => {
        if (this.state.dlNumber !== '' || this.state.dlNumber !== null) {
            api.dlChange(sessionStorage.getItem("cid"), this.state.dlNumber)
                .then(resp => {
                    console.log(resp.data)
                    toast.success(resp.data)
                })
                .catch(err => {
                    toast.error("Something Wrong!")
                    console.log(err.data)
                });
        } else {
            toast.warning("Driving License Number are Not Empty!")
        }
    }
    render() {
        if (this.state.authenticate === false) {
            return <Redirect to="/" />
        }
        sessionStorage.setItem("done", 0)
        return (
            <div className="container rounded bg-white my-prof" >
                <div className="row">
                    <div className="col-md-5 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <div className="rounded-circle mt-5 outer-img">
                                <div className="inner-img">{this.state.firstName.charAt(0).toUpperCase()}</div>
                            </div>

                            <br />
                            <span className="font-weight-bold">{this.state.firstName + " " + this.state.lastName}</span>
                            <span className="text-black-50">{this.state.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-7 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Details</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">First Name</label>
                                    <div className="form-control">{this.state.firstName}</div>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <div className="form-control">{this.state.lastName}</div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <div className="form-control">{this.state.mobile}</div>

                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <div className="form-control">{this.state.email}</div>

                                </div>
                            </div>

                            <div id="show-me">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Driving License Number</label>
                                        <input type="text" className="form-control" placeholder="Driving License Number" name="dlNumber" value={this.state.dlNumber} onChange={this.onchnage} />
                                    </div>
                                    {/* <div className="col-md-6">
                                        <label className="labels">Driving License Image</label>
                                        <input type="file" className="form-control" placeholder="surname" />
                                    </div> */}
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={this.update}>Update</button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >


        );
    }
}
export default Profile;