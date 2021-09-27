import React, { Component } from 'react';
import $ from "jquery"
// import bgimg from "../../assets/images/mainbg.jpg";
import api from "../../service/CustomerApiService"
import { toast } from "react-toastify"
import { Redirect } from 'react-router-dom';
import mbg from "../assets/images/img.gif"
import carImg from "../assets/images/car.png"

class HomeMain extends Component {
    constructor(props) {
        super(props)
        const urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams);
        const cid = urlParams.get('cid');
        const ctid = urlParams.get('ctid');
        const pdt = urlParams.get('pdt');
        const rdt = urlParams.get('rdt');
        const hr = urlParams.get('hr');
        var redirects = false;
        var urls = '';
        // alert(sessionStorage.getItem("done"))
        // || sessionStorage.getItem("done") !== 1
        if (cid === null || ctid === null || pdt === null || rdt === null || hr === null || cid === "" || ctid === "" || pdt === "" || rdt === "" || hr === "" || sessionStorage.getItem("done") !== '1') {
            urls = '/';
            redirects = true
            toast.error("Something Wrong! Try Again!")
        } else {
            if (sessionStorage.getItem("cid") === null) {
                toast.warning("Login First!")
                urls = '/login';
                redirects = true
            }
            //else {
            //     api.fetchCustomerById(sessionStorage.getItem("cid"))
            //         .then(resp => {
            //             if (resp.data.drivingLicenseNo === null || resp.data.drivingLicenseNo === "") {
            //                 // toast.warning("Driver License Not upload, Please upload it!")
            //                 urls = '/login';
            //                 redirects = true
            //             }
            //         })
            //         .catch(err => {
            //             toast.error("Something Wrong!")
            //             urls = '/';
            //             redirects = true
            //         });
            //     urls = urls;

            // }
        }
        this.state = {
            cid: cid,
            ctid: ctid,
            hrs: hr,
            city: '',
            carType: '',
            pickupDateTime: pdt,
            returnDateTime: rdt,
            carList: [],
            redirect: redirects,
            url: urls,
            avpay: 0,
            totalFare: 0,
            sCId: ''

        }
        this.componentDidMount = this.componentDidMount;
        // this.pickTime = this.pickTime;
        //     // this.clickCheck = this.clickCheck;

    }

    componentDidMount = () => {
        api.fetchForBookingByCidCtid(this.state.cid, this.state.ctid)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    carList: resp.data,
                    city: resp.data[0].dealer.city.cityName + ", " + resp.data[0].dealer.city.cityState,
                    carType: resp.data[0].carType.carTypeName
                })

            })
            .catch(err => {
                toast.error(err.response.data.message)
                console.log(err.response.data.message)

                // toast.error("Something Wrong!");
            });
    }


    selectCar = (cid, totalFares) => {
        this.setState({
            totalFare: Math.floor(totalFares),
            sCId: cid
        });

    }
    finalSelect = () => {
        var book = {
            pickupDateTime: this.state.pickupDateTime,
            returnDateTime: this.state.returnDateTime,
            totalFare: this.state.totalFare,
            advancePayment: this.state.avpay,
            bookingDateTime: new Date(),
            bookingStatus: "PENDING"
        }

        api.finalBooking(sessionStorage.getItem("cid"), this.state.sCId, book)
            .then(resp => {
                sessionStorage.setItem("done", '2');
                this.setState({
                    url: '/b_done',
                    redirect: true
                })

            })
            .catch(err => {
                console.log(err.response.data.message)
                toast.error("Something Wrong!")
            })
    }
    showMap = (lat, long) => {
        $('#modal-body1').html("<iframe src='https://maps.google.com/maps?q=" + lat + ", " + long + "&z=15&output=embed' width='100%' height='400px' frameborder='0' allowfullscreen></iframe>")
    }
    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.url} />
        }


        return (
            <div style={{ marginTop: "0px" }}>
                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.clickme(12)}>
                    Launch demo modal
                </button> */}
                <section className="section section-bg top_bg_crlst" id="call-to-action " style={{ backgroundImage: `url(${mbg})`, padding: `50px` }}>
                    {/* <img src={mbg} /> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cta-content">
                                    <br />
                                    <br />
                                    <h2>Confirm <em>Booking</em></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Modal 1 --> */}
                <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Map Location</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" id="modal-body1">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal 1 --> */}
                <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Advance Payment & Confirm Booking</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" id="modal-body2">
                                <label className="labels">Total Fare</label> : <span>{this.state.totalFare}</span>
                                <hr />
                                <label className="labels">Advance Payment </label><input onChange={(e) => this.setState({ avpay: e.target.value })} type="number" id="adv_pay" min="0" max={this.state.totalFare} value={this.state.avpay} className="advPay" />

                                {/* <label className="labels"> Fare</label> : <span>{this.state.totalFare}</span> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.finalSelect}>Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-back">

                    <div className="row">
                        <div className="col-md-4 r1">
                            <h3><b>Deatils</b></h3>
                            <div className="col-md-12 m-cl">
                                <label className="labels">Pickup City:</label>
                                <div className="form-control my-val">{this.state.city}</div>
                            </div>
                            <div className="col-md-12 m-cl">
                                <label className="labels">Car Type:</label>
                                <div className="form-control  my-val">{this.state.carType}</div>
                            </div>
                            <div className="col-md-12 m-cl">
                                <label className="labels">Pickup Date & Time</label>
                                <div className="form-control  my-val">{this.state.pickupDateTime}</div>
                            </div>
                            <div className="col-md-12 m-cl">
                                <label className="labels">Return Date & Tome</label>
                                <div className="form-control  my-val">{this.state.returnDateTime}</div>
                            </div>
                            <div className="col-md-12 m-cl">
                                <label className="labels">Total Hours :</label>
                                <div className="form-control  my-val">{this.state.hrs}</div>
                            </div>
                        </div>
                        <div className="col-md-8 r2">
                            <h3><b>Select Car</b></h3>
                            <div className="car-list">
                                {/* {console.log(this.state.carList)} */}
                                {
                                    this.state.carList.map(e => (
                                        < div className="each-row" >
                                            <div className="row">
                                                <div className="col-2 ">
                                                    <img src={carImg} width="40px" height="40px" />
                                                </div>
                                                <div className="col-8">

                                                    <div className="row my-line">
                                                        <div className="col-5 title"><div style={{ fontSize: "10px" }}>Model/Company:</div>{e.carModel} ({e.carCompany})</div>
                                                        <div className="col-3"><div style={{ fontSize: "10px" }}>Hourly Rate :</div> Rs.{e.hourlyRate}</div>
                                                        <div className="col-4"><div style={{ fontSize: "10px" }}>Fuel Type :</div>{e.fuelType}</div>
                                                    </div>
                                                    <div className="row my-line">
                                                        <div className="col-12">
                                                            <span style={{ fontSize: "10px" }}>Address :</span>{e.dealer.address}
                                                            &nbsp;&nbsp;&nbsp;(<a data-toggle="modal" data-target="#exampleModal1" onClick={() => this.showMap(e.dealer.latitude, e.dealer.longitude)} href="#">On Map</a>)
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-2 ">
                                                    <button className="mybtn" data-toggle="modal" data-target="#exampleModal2" onClick={() => this.selectCar(e.id, e.hourlyRate * this.state.hrs)}>Rs. {Math.floor(e.hourlyRate * this.state.hrs)}</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}





                            </div>
                        </div>
                        {/* <div className="col-md-3 r3">
                        <h3><b>Pa</b></h3>
                            <table className="table">
                                Nit
                            </table>
                        </div> */}
                    </div>
                </div>
            </div >
        )
    }
}
export default HomeMain;