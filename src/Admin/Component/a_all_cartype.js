// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
// import DataTable from 


class CarTypeList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      cartype: [],
      message: null
    }

  }
  componentDidMount = () => {

    // $('#tableID').DataTable();
    //     this.reloadUserList();
    //   }
    // reloadUserList() {

    api.fetchAllCartype()
      .then(resp => {
        //alert("xyz")
        console.log(resp.data);
        this.setState({
          cartype: resp.data
        })
        $('#tableID').DataTable();


      })
      .catch(err => {
        console.error(err);
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

                  <h4 className="card-title ">All Car Type List</h4>
                  <p className="card-category"> Here Is a List of All Car Types Under "JustDRIVE"</p>
                  {/* <Link to="/a_add_city"className="btn btn-style btn-success "> Add New City</Link> */}
                </div>


                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Type</th>
                          <th>Includes</th>
                          <th>Capacity</th>
                          {/* <th>Pin Code</th> */}

                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.cartype.map(
                            cartype =>
                              <tr key={cartype.id}>
                                <td>{cartype.id}</td>
                                <td>{cartype.carTypeName}</td>
                                <td>{cartype.carIncludes}</td>
                                <td>{cartype.personCapacity}</td>
                                {/* <td>{cartype.pincode}</td> */}

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
export default CarTypeList;