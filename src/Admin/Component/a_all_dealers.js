// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
// import DataTable from 


class DealerList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      dealers: [],
      message: null
    }

  }
  componentDidMount = () => {

    // $('#tableID').DataTable();
    //     this.reloadUserList();
    //   }
    // reloadUserList() {

    api.fetchDealers()
      .then(resp => {
        //alert("xyz")
        console.log(resp.data);
        this.setState({
          dealers: resp.data
        })



      })
      .catch(err => {
        console.log(err);
        toast.error(err.response.data.message);
      })
  }

  render() {

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">

                  <h4 className="card-title ">All Dealers List</h4>
                  <p className="card-category"> Here is a list of All Dealers of "JustDRIVE"</p>
                  <Link to="/a_add_dealer" className="btn btn-style btn-success "> Add Dealer</Link></div>


                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>DealerID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile No.</th>
                          <th>Address</th>
                          <th>Latitude</th>
                          <th>Longitude</th>
                          <th>City</th>
                          {/* <th>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.dealers.map(
                            dealers =>
                              <tr key={dealers.id}>
                                <td>{dealers.id}</td>
                                <td>{dealers.name}</td>
                                <td>{dealers.email}</td>
                                <td>{dealers.mobileNumber}</td>
                                <td>{dealers.address}</td>
                                <td>{dealers.latitude}</td>
                                <td>{dealers.longitude}</td>
                                <td>{dealers.city.cityName}</td>
                                <td>
                                  {/* <button className="btn btn-success" onClick={() => this.deleteDealer(dealers.id)}>Delete Dealer</button> */}
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
export default DealerList;