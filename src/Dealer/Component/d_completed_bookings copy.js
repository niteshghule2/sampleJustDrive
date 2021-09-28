// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/DealerApiService"
import { toast } from 'react-toastify';
// import DataTable from 

// function Car() {
class CompletedBookingList extends Component {
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
      message: null
    }
    // this.deleteUser = this.deleteUser.bind(this);
    // this.editUser = this.editUser.bind(this);
    // this.addUser = this.addUser.bind(this);
    // this.reloadUserList = this.reloadUserList.bind(this);
  }
  componentDidMount = () => {

    // $('#tableID').DataTable();
    //     this.reloadUserList();
    //   }
    // reloadUserList() {

    api.fetchCompletedBookings(sessionStorage.getItem("did"))
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
  editUser = (id) => {
    var bb = this.state.bookings.filter(b => {
      if (b.id == id) { return b }
    })

    console.log(bb)
    //if (bb[0].bookingStatus === "COMPLETED") { var a = `<button id="pdf" onclick="click()" class="btn btn-primary">PDF</button>` } else { var a = "" };
    //this.state.pdfLink = a;
    var myData = `<div >
        <table class="table table-borderless" id="bill-table" style="width:1000px" >
      
      <tbody>
        <tr >
          <th width="50%">Booking Id :</th>
          <td width="50%">`+ bb[0].id + `</td>
        </tr>
        <tr >
          <th width="50%">Pickup Date & Time :</th>
          <td width="50%">`+ bb[0].pickupDateTime + `</td>
        </tr>
        
        <tr >
          <th width="50%">Customer Name :</th>
          <td width="50%">`+ bb[0].customerDetails.firstName + bb[0].customerDetails.lastName + `</td>
        </tr>
        <tr >
        <th width="50%">Driving License :</th>
        <td width="50%">`+ bb[0].customerDetails.drivingLicenseNo + `</td>
      </tr>
        <tr >
          <th width="50%">Customer Mobile :</th>
          <td width="50%">`+ bb[0].customerDetails.mobile + `</td>
        </tr>
        <tr >
          <th width="50%">Car No :</th>
          <td width="50%">`+ bb[0].carDetails.carNo + `</td>
        </tr>
        <tr >
          <th width="50%">Car Model :</th>
          <td width="50%">`+ bb[0].carDetails.carModel + `</td>
        </tr>
        <tr >
          <th width="50%">Car Type :</th>
          <td width="50%">`+ bb[0].carDetails.carType.carTypeName + `</td>
        </tr>
        <tr >
          <th width="50%">Car Company :</th>
          <td width="50%">`+ bb[0].carDetails.carCompany + `</td>
        </tr>
        <tr >
          <th width="50%">Total Fare :</th>
          <td width="50%">`+ bb[0].totalFare + `</td>
        </tr>
        
        
        <tr >
          <th width="50%">Advance Payment :</th>
          <td width="50%">`+ bb[0].advancePayment + `</td>
        </tr>
        <tr >
          <th width="50%">Booking Status :</th>
          <td width="50%">`+ bb[0].bookingStatus + `</td>
        </tr> 
        
      </tbody>
    </table><div>
        `;
    $('#modal-body').html(myData);
  }


  render() {

    return (
      <div>
        <div className="container-fluid">
          <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Booking Details</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" id="modal-body">

                </div>
                <div class="modal-footer">
                  {/* {alert(this.state.pdfLink)} */}
                  {/* <button type="button" className="btn btn-primary" onClick={this.pdfShow}>PDF</button> */}
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">All Completed Bookings </h4>
                  <p className="card-category"> Here is a list of all Completed  list </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>BookingID</th>
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
                                <td>{bookings.pickupDateTime}</td>
                                <td>{bookings.carDetails.dealer.city.cityName}, {bookings.carDetails.dealer.city.cityState}</td>

                                <td>{bookings.carDetails.carType.carTypeName}</td>
                                <td>{bookings.carDetails.carNo}</td>
                                <td>{bookings.totalFare}</td>
                                <td>{bookings.advancePayment}</td>
                                <td>
                                  <button data-toggle="modal" data-target="#exampleModal" className="btn btn-success" onClick={() => this.editUser(bookings.id)}> View</button>
                                  {/* <button className="btn btn-success" onClick={() => this.editUser(bookings.id)} style={{marginLeft: '20px'}}> Edit</button> */}
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
export default CompletedBookingList;