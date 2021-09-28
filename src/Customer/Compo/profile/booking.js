
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from "jquery"

import api from '../../../service/CustomerApiService';
import { toast } from 'react-toastify';
// import "./src/tableHTMLExport"
$.DataTable = require("datatables.net")



class Bookings extends Component {
  state = {
    bookings: [],
    bauthenticate: (sessionStorage.getItem("cid") !== null),
    sBId: '',
    pdfLink: ''
  }
  constructor(props) {
    super(props);

    this.componentDidCatch = this.componentDidMount;
    // this.my = this.my;
  };
  componentDidMount = () => {

    if (sessionStorage.getItem("cid") !== null) {
      this.state = ({
        id: sessionStorage.getItem("cid"),
        firstName: sessionStorage.getItem("cfname"),
        bauthenticate: true
      })
    }

    // $(document).ready(function () {

    // });

    api.fetchCustomerBookings(sessionStorage.getItem("cid"))
      .then(resp => {
        this.setState({ bookings: resp.data })

        console.log(resp.data);//actual response data sent by back end
        $('#tableID').DataTable();
      })
      .catch(err => {
        console.error(err);
        // this.setState({ msg: err.response.data.message });
        toast.error(err.response.data.message);
      })

  }

  showBooking = (id) => {
    var bb = this.state.bookings.filter(b => {
      if (b.id == id) { return b }
    })
    console.log(bb)
    if (bb[0].bookingStatus === "COMPLETED") { var a = `<button id="pdf" onclick="click()" class="btn btn-primary">PDF</button>` } else { var a = "" };
    this.state.pdfLink = a;
    var myData = `<div style="min-height: 70vh;y-overflow:auto">
    <table class="table table-borderless" id="bill-table" style="width:1000px" >
  
  <tbody>
    <tr >
      <th width="50%">Booking Id :</th>
      <td width="50%">`+ bb[0].id + `</td>
    </tr>
    <tr >
      <th width="50%">Booking Date & Time :</th>
      <td width="50%">`+ bb[0].bookingDateTime + `</td>
    </tr>
    <tr >
      <th width="50%">Pickup Address :</th>
      <td width="50%">
      `+ bb[0].carDetails.dealer.address + ` - ` + bb[0].carDetails.dealer.city.cityName + `, ` + bb[0].carDetails.dealer.city.cityState + `
      <br><a target="_blank" href="https://maps.google.com?q=`+ bb[0].carDetails.dealer.latitude + `,` + bb[0].carDetails.dealer.longitude + `">Go To Location</a>
      </td>
    </tr>
    <tr >
      <th width="50%">Dealer Details :</th>
      <td width="50%">
      <a href="tel:`+ bb[0].carDetails.dealer.mobileNumber + `">` + bb[0].carDetails.dealer.mobileNumber + `</a> / <a href="mailto:` + bb[0].carDetails.dealer.email + `">` + bb[0].carDetails.dealer.email + `</a>
      </td>
    </tr>
    <tr >
      <th width="50%">Car Type :</th>
      <td width="50%">`+ bb[0].carDetails.carType.carTypeName + `</td>
    </tr>
    <tr >
      <th width="50%">Car Details :</th>
      <td width="50%">`+ bb[0].carDetails.carNo + ` (` + bb[0].carDetails.carModel + ` - ` + bb[0].carDetails.carCompany + `)</td>
    </tr>
    <tr >
    <th width="50%">Pickup Date & Time :</th>
    <td width="50%">`+ bb[0].pickupDateTime + `</td>
  </tr>
  <tr >
  <th width="50%">Return Date & Time :</th>
  <td width="50%">`+ bb[0].returnDateTime + `</td>
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
  <th width="50%">Total Hour :</th>
  <td width="50%">`+ bb[0].totalHours + `</td>
</tr>
<tr >
  <th width="50%">Status :</th>
  <td width="50%">`+ bb[0].bookingStatus + `</td>
</tr>
  </tbody>
</table><div>
    `;
    $('#modal-body').html(myData);
  }

  pdfShow = () => {
    if (this.state.pdfLink === '') {
      toast.warning("Booking not Completed!!!")
      return;
    }
    var sTable = document.getElementById('modal-body').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {padding: 5px;border: 1px 0px 1px 0px solid 0px #DDD; border-collapse: collapse;";
    style = style + "padding: 5px;text-align: left;}";
    // style = style + "
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write('<h1 style="color:#490573">JustDrive</h1>');
    win.document.write('<h6>Car Rental Service</h6>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
  }
  render() {
    // console.log(this.state.bookings)
    if (this.state.bauthenticate === false) {
      return <Redirect to="/" />
    }
    sessionStorage.setItem("done", 0)

    return (
      <div className="container-fluid" style={{ marginTop: "80px" }}>
        <div style={{ marginTop: "20px" }}>
          {/* <!-- Button trigger modal --> */}
          {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button> */}

          {/* <!-- Modal --> */}
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
                <div className="modal-footer">
                  {/* {alert(this.state.pdfLink)} */}
                  <button type="button" className="btn btn-primary" onClick={this.pdfShow}>PDF</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-12" style={{ marginTop: "30px" }}>
            <div className="card">
              <div className=" myheader">
                <h4 className="card-title " >All Bookings</h4>
                <p className="card-category" style={{ color: "white" }}> Here is your all bookings history!</p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table id="tableID" className="table table-striped" style={{ width: "100%" }} >
                    <thead>
                      <tr>
                        <th>Booking Id</th>
                        <th>Booking Date & Time</th>
                        <th>Pickup City</th>
                        <th>Car Type</th>
                        <th>Car Number</th>
                        <th>Status</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.bookings.reverse().map(b => (
                        <tr>
                          <td>{b.id}</td>
                          {/* .format('YYYY-MM-DD HH:MM:SS') */}
                          <td>{b.bookingDateTime}</td>
                          <td>{b.carDetails.dealer.city.cityName}, {b.carDetails.dealer.city.cityState}</td>
                          <td>{b.carDetails.carType.carTypeName}</td>
                          <td>{b.carDetails.carNo}</td>
                          <td>{b.bookingStatus}</td>
                          {/* onClick={() => this.show(b.id)} */}
                          <td><button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.showBooking(b.id)}>View</button></td>
                        </tr>
                      ))}

                      {/* <tr>
                        <td>1</td>
                        <td>23 Sep 2021 12:30</td>
                        <td>Pune, Maharashtra</td>
                        <td>Seden</td>
                        {/* <td>23 Sep 2021 12:30</td> */}
                      {/* <td><button class="btn btn-primary">View</button></td>
                    </tr> */}
                      {/* <tr> */}
                      {/* <td>ST2</td> */}
                      {/* <td>Wincy</td> */}
                      {/* <td>36</td> */}
                      {/* <td>Female</td> */}
                      {/* <td>170</td> */}
                      {/* </tr> */}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Bookings;