import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import { Link } from 'react-router-dom';
import api from "../../service/AdminApiService"
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
      message: null
    }
  }
  componentDidMount = () => {
    // $('#tableID').DataTable();
    //alert("xyz")
    api.fetchcars()
      .then(resp => {
        //alert("xyz")

        console.log(resp.data);
        this.setState({
          cars: resp.data
        })
        $('#tableID').DataTable();
      })
      .catch(err => {
        console.error(err);
        //this.setState({ msg: err.response.data.message });
        toast.error(err.response.data.message);
      })

  }

  render() {
    return (
      <div>

        <div className="container-fluid">

          <div className="row">
            <div className="bottom-btn col-md-1 col-sm-6  pt-2">
              {/* <Link to="/a_car_add"className="btn btn-style btn-primary  px-2">Add Car</Link> */}
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
                          {/* <th>Action</th> */}
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
                                {/* <td>
                                  <button className="btn btn-success" onClick={() => this.deleteUser(cars.id)}> Delete </button>

                                </td> */}
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