// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/DealerApiService"
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
// import DataTable from 

// function Car() {
class PendingBookingList extends Component {
  // const [count, setCount] = useState(0);
  // const data = DataTable();
  // Similar to componentDidMount and componentDidUpdate:
  // $(document).ready(function () {
  //   $('#example').data;
  // });

  constructor(props) {
    super(props)
    this.state = {
      bookings: [],
      message: null,
      redirect: false
    }
    this.changeStatus = this.changeStatus.bind(this);
    this.cancleBooking = this.cancleBooking.bind(this);
    // this.addUser = this.addUser.bind(this);
    // this.reloadUserList = this.reloadUserList.bind(this);
  }
  componentDidMount = () => {

    // $('#tableID').DataTable();
    //     this.reloadUserList();
    //   }
    // reloadUserList() {

    api.fetchPendingBookings(sessionStorage.getItem("did"))
      .then(resp => {
        //alert("xyz")
        console.log(resp.data);
        this.setState({
          bookings: resp.data
        })
        $('#tableID').DataTable();
      })
      .catch(err => {
        console.error(err);
        //this.setState({ msg: err.response.data.message });
        toast.error(err.response.data.message);
      })
  }

  changeStatus = (bookingId) => {
    //alert(bookingId)
    this.setState({ redirect: true })
    console.log(this.state.redirect)
    api.changeStatusToApprove(bookingId)
      .then(resp => {
        //alert("something")
        console.log(resp.data)

        toast.success(resp.data)

        window.location.reload(false);

      })
      .catch(err => {
        //alert("something in cathc")
        console.error(err);
        //this.setState({ msg: err.response.data.message });
        //toast.error(err.response.data.message);
      })

  }
  cancleBooking = (bookingId) => {
    // alert(bookingId)
    api.cancleBooking(bookingId)
      .then(resp => {
        console.log(resp.data)
        toast.success("Booking cancelled...!!")
      })
      .catch(err => {
        console.error(err);
        //this.setState({ msg: err.response.data.message });
        toast.error(err.response.data.message);
      })
    window.location.reload(false);
  }

  render() {
    if (this.state.redirect) {
      <Redirect to="/d_pending_bookings" />
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">All Pending Bookings </h4>
                  <p className="card-category"> Here is a list of pending Bookings </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>BookingID</th>
                          <th>Customer DL</th>
                          <th>Pickup Date & Time</th>
                          <th>Pickup City</th>
                          <th>Car Type</th>
                          <th>Car No</th>
                          <th>Total Fare</th>
                          <th>Advance Payment</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.bookings.map(
                            bookings =>
                              <tr key={bookings.id}>
                                <td>{bookings.id}</td>
                                <td>{bookings.customerDetails.drivingLicenseNo}</td>
                                <td>{bookings.pickupDateTime}</td>
                                <td>{bookings.carDetails.dealer.city.cityName}, {bookings.carDetails.dealer.city.cityState}</td>

                                <td>{bookings.carDetails.carType.carTypeName}</td>
                                <td>{bookings.carDetails.carNo}</td>
                                <td>{bookings.totalFare}</td>
                                <td>{bookings.advancePayment}</td>
                                <td>
                                  <button className="btn btn-success" onClick={() => this.changeStatus(bookings.id)} > Approve</button>
                                  <button className="btn btn-danger" onClick={() => this.cancleBooking(bookings.id)} style={{ marginLeft: '20px' }}> Cancle</button>
                                </td>
                              </tr>
                          )
                        }
                      </tbody>
                    </table>
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
export default PendingBookingList;