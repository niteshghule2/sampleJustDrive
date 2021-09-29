// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
// import DataTable from 


class CustomerList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      cust: [],
      message: null
    }
    this.componentDidMount = this.componentDidMount;
  }
  componentDidMount = () => {

    // $('#tableID').DataTable();

    api.fetchCustomers()
      .then(resp => {
        // console.log(resp.data);
        // $('#tableID').DataTable();
        this.setState({
          cust: resp.data
        })
        $('#tableID').DataTable();
      })
      .catch(err => {
        console.error(err.response.data.message);
        toast.error("Something Wrong");
      })
    // $('#tableID').DataTable();
  }

  render() {

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">All Customers List</h4>
                  <p className="card-category"> Here is a list of All Customers of "JustDRIVE"</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>CustomerID</th>
                          <th>FName</th>
                          <th>LName</th>
                          <th>Email</th>
                          <th>Mobile No.</th>
                          <th>LicenseNo</th>
                          {/* <th>LicenceImage</th> */}
                          {/* <th>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.cust.map(cust => (
                            <tr key={cust.id}>
                              <td>{cust.id}</td>
                              <td>{cust.firstName}</td>
                              <td>{cust.lastName}</td>
                              <td>{cust.email}</td>
                              <td>{cust.mobile}</td>
                              <td>{cust.drivingLicenseNo}</td>
                            </tr>)
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
export default CustomerList;