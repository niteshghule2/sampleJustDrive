
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from "jquery"
import "./profile.css"
import "datatables.net"
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
            })
        }
    }

    render() {
        if (this.state.authenticate === false) {
            return <Redirect to="/" />
        }
        return (
            <div className="container rounded bg-white my-prof">
                <div className="row">
                    <div className="col-md-5 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <div className="rounded-circle mt-5 outer-img">
                                <div className="inner-img">{this.state.firstName.charAt(0).toUpperCase()}</div>
                            </div>
                            {/* <img className="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" /> */}
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
                            {/* <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">First Name</label>
                                    <input type="text" className="form-control" placeholder="first name" value={this.state.firstName} readOnly />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input type="text" className="form-control" value="" placeholder="surname" value={this.state.lastName} readOnly />

                                </div>
                            </div> */}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <div className="form-control">{this.state.mobile}</div>
                                    {/* <input type="text" className="form-control" placeholder="enter phone number" value={this.state.mobile} readOnly /> */}
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <div className="form-control">{this.state.email}</div>
                                    {/* <input type="text" className="form-control" placeholder="enter email id" value={this.state.email} /> */}
                                </div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Update</button></div>
                            <div id="show-me">
                                <div className="col-md-12">
                                    <label className="labels">Password</label>
                                    {/* <div className="form-control">{this.state.mobile}</div> */}
                                    <input type="text" className="form-control" placeholder="Change Password" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Driving License Number</label>
                                        <input type="text" className="form-control" placeholder="Driving License Number" value={this.state.dlNumber} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Driving License Image</label>
                                        <input type="file" className="form-control" placeholder="surname" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span>
                                <span className="border px-3 p-1 add-experience">
                                    <i className="fa fa-plus"></i>&nbsp;Experience</span>
                            </div><br />
                            <div className="col-md-12">
                                <label className="labels">Experience in Designing</label>
                                <input type="text" className="form-control" placeholder="experience" value="" />
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Additional Details</label>
                                <input type="text" className="form-control" placeholder="additional details" value="" />

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


        );
    }
}
export default Profile;