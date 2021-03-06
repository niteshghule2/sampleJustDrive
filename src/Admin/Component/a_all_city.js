// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
// import DataTable from 


class CityList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      message: null
    }
    this.componentDidMount = this.componentDidMount;
  }
  componentDidMount = () => {
    // $('#tableID').DataTable();
    api.fetchAllCities()
      .then(resp => {

        // console.log(resp.data);
        this.setState({
          cities: resp.data
        });
        $('#tableID').DataTable();
      })
      .catch(err => {
        console.error(err.response.data.message);
        toast.error("Something Wrong!");
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

                  <h4 className="card-title ">All city List</h4>
                  <p className="card-category"> Here Is a List of All Cities Covered by "JustDRIVE"</p>
                  <Link to="/a_add_city" className="btn btn-style btn-success "> Add New City</Link>
                </div>


                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>City ID</th>
                          <th>Name</th>
                          <th>State</th>
                          <th>Country</th>
                          <th>Pin Code</th>
                          {/* <th>Latitude</th>
                          <th>Longitude</th>
                          <th>City</th>
                          <th>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.cities.map(cities => (
                            <tr key={cities.id}>
                              <td>{cities.id}</td>
                              <td>{cities.cityName}</td>
                              <td>{cities.cityState}</td>
                              <td>{cities.cityCountry}</td>
                              <td>{cities.pincode}</td>

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
export default CityList;