// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import { Link } from 'react-router-dom';
import api from "../../service/DealerApiService"
import { toast } from 'react-toastify';
// import DataTable from 

// function Car() {
class Car extends Component {
  // const [count, setCount] = useState(0);
  // const data = DataTable();
  // Similar to componentDidMount and componentDidUpdate:
  // $(document).ready(function () {
  //   $('#example').data;
  // });
  constructor(props) {
    super(props)
    this.state = {
        cars: [],
        message: null,
        carId:null
    }
    // this.deleteUser = this.deleteUser.bind(this);
    // this.editUser = this.editUser.bind(this);
    // this.addUser = this.addUser.bind(this);
   // this.reloadUserList = this.reloadUserList.bind(this);
}
  componentDidMount = () => {
    // $('#tableID').DataTable();
    //alert("xyz")
    api.fetchCars(sessionStorage.getItem("did"))
        .then(resp => {
            //alert("xyz")
            console.log(resp.data);
            this.setState({
              cars:resp.data
            })
            //alert(this.state.bookings.id)
        })
        .catch(err => {
          console.error(err);
          //this.setState({ msg: err.response.data.message });
          toast.error(err.response.data.message);
      })
  }
  editUser=(id)=>{
    var bb = this.state.cars.filter(b => {
      if (b.id == id) { return b }
    })
    if(bb[0].carStatus===true){
      var msg="Ongoing Trip"
    }else{
      var msg="Available for Trip"
    }
    console.log(bb)
    //if (bb[0].bookingStatus === "COMPLETED") { var a = `<button id="pdf" onclick="click()" class="btn btn-primary">PDF</button>` } else { var a = "" };
    //this.state.pdfLink = a;
    var myData = `<div >
    <table class="table table-borderless" id="bill-table" style="width:1000px" >
  
  <tbody>
    <tr >
      <th width="50%">Car Id :</th>
      <td width="50%">`+ bb[0].id + `</td>
    </tr>
    <tr >
      <th width="50%">Car No :</th>
      <td width="50%">`+ bb[0].carNo + `</td>
    </tr>
    <tr >
      <th width="50%">Car Model :</th>
      <td width="50%">`+ bb[0].carModel + `</td>
    </tr>
    <tr >
      <th width="50%">Car Company :</th>
      <td width="50%">`+ bb[0].carCompany + `</td>
    </tr>
    <tr >
      <th width="50%">Car Status :</th>
      <td width="50%">`+ msg + `</td>
    </tr>
    <tr >
      <th width="50%">Car Type :</th>
      <td width="50%">`+ bb[0].carType.carTypeName + `</td>
    </tr>
    <tr >
      <th width="50%">Capacity :</th>
      <td width="50%">`+ bb[0].carType.personCapacity + `</td>
    </tr>
    <tr >
      <th width="50%">Fuel Type :</th>
      <td width="50%">`+ bb[0].fuelType + `</td>
    </tr>
    <tr >
      <th width="50%">Hourly Rate :</th>
      <td width="50%">`+ bb[0].hourlyRate + `</td>
    </tr>

  </tbody>
</table><div>
    `;
    $('#modal-body').html(myData);
  }

  updateRate=(id)=>{
    this.state.carId=id;
     var bb = this.state.cars.filter(b => {
       if (b.id == id) { return b }
     })
    
    // console.log(bb)
    //if (bb[0].bookingStatus === "COMPLETED") { var a = `<button id="pdf" onclick="click()" class="btn btn-primary">PDF</button>` } else { var a = "" };
    //this.state.pdfLink = a;
    var myData = `<div >
    <label className="labels">New Hourly Rate</label><br/>
    <input min=1 id= "new_rate" type="number" className="form-control"  placeholder="`+bb[0].hourlyRate+`" />
    <div>
    `;
    $('#modal-body2').html(myData);
  }
  saveChanges=()=>{
    var v = $('#new_rate').val();
    //alert(v+this.state.carId)
    api.updateHourlyRate(this.state.carId,v)
    .then(resp => {
      //alert("abc")
      console.log(resp.data);
      toast.success(resp.data)
      // this.setState({
      //   cars:resp.data
      // })
      //alert(this.state.bookings.id)
      window.location.reload(false);
      //toast.success(resp.data)
  })
  .catch(err => {
    alert("xyz")
    console.error(err);
    //this.setState({ msg: err.response.data.message });
    toast.error(err.response.data.message);
  })
  
  }
  render() {
    return (
      <div>

        <div className="container-fluid">
        <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Car Details</h5>
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
          <div className="modal fade " id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Car Details</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" id="modal-body2">

                </div>
                <div class="modal-footer">
                  {/* {alert(this.state.pdfLink)} */}
                  <button type="button" className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="bottom-btn col-md-1 col-sm-6  pt-2">
            <Link to="/d_car_add"className="btn btn-style btn-primary  px-2">Add Car</Link>
          </div> 
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Car List</h4>
                  <p className="card-category"> Here is a list of cars</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" class="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>Car ID</th>
                          <th>Model</th>
                          <th>Company</th>
                          <th>Number</th>
                          <th>Type</th>
                          <th>Fuel Type</th>
                          <th>Dealer</th>
                          <th>Rate per day</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.state.cars.map(
                        cars =>
                                    <tr key={cars.id}>
                                        <td>{cars.id}</td>
                                        <td>{cars.carModel}</td>
                                        <td>{cars.carCompany}</td>
                                        <td>{cars.carNo}</td>
                                        <td>{cars.carType.carTypeName}</td>
                                        <td>{cars.fuelType}</td>
                                        <td>{cars.dealer.name}</td>
                                        <td>{cars.hourlyRate}</td>
                                        <td>
                                            <button data-toggle="modal" data-target="#exampleModal2" className="btn btn-success" onClick={() => this.updateRate(cars.id)}> Update </button>
                                            <button data-toggle="modal" data-target="#exampleModal"  className="btn btn-success" onClick={() => this.editUser(cars.id)} style={{marginLeft: '20px'}}> View</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody></table>
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
export default Car;