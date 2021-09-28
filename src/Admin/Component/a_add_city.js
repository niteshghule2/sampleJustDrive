// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import { Link } from 'react-router-dom';
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'
// import DataTable from 


class CityAdd extends Component {

  constructor(props) {
    super(props)
    this.state = {

      message: null,
      submit: false,

      cityName: '',
      cityState: '',
      cityCountry: '',
      pincode: ''

    }

  }
  //   componentDidMount = () => {
  //      //$('#tableID').DataTable();

  //     api.fetchAllCities()
  //         .then(resp => {

  //             console.log(resp.data);
  //             this.setState({
  //               city:resp.data
  //             })

  //         })
  //         .catch(err => {
  //           console.error(err);

  //           toast.error(err.response.data.message);
  //       })

  //   }
  submit = () => {
    if (this.state.pincode === '' && this.state.cityName === '' && this.state.cityState === '' && this.state.cityCountry === '') {
      toast.error("All fields are required")
      return;
    }
    const city = {


      cityName: this.state.cityName,
      cityState: this.state.cityState,
      cityCountry: this.state.cityCountry,
      pincode: this.state.pincode,


    }

    api.addCity(city)
      .then(resp => {

        toast.success("City Added Succesfully!")
        this.setState({
          submit: true
        })
      })
      .catch(err => {
        console.error(err);

        toast.error(err.response.data.message);
      })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // changecity =(e)=>{
  //     this.setState({
  //         cityName: e.target.value
  //     })
  // }
  render() {

    if (this.state.submit) {                   //     we dont need to redirect anywhere PRATUL  
      return <Redirect to="/a_all_city" />;
      // this.props.history.push(this.state.url);
    }
    return (
      <div>

        <div className="container-fluid">

          <div className="row">
            {/* <div className="bottom-btn col-md-1 col-sm-6  pt-2">
            <Link to="/d_car_add"className="btn btn-style btn-primary  px-2">Add Car</Link>
          </div>  */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Add New City</h4>
                  <p className="card-category"> Admin can Add New City HERE </p>
                </div>
                <div className="card-body">
                  <div className="container">
                    <form className="form-horizontal" role="form">
                      <h2>City Registration Form</h2>
                      <div className="form-group">
                        <label for="cityName" className="col-sm-3 control-label">Name</label>
                        <div className="col-sm-9">
                          <input type="text" id="cityName" name="cityName" placeholder="Enter Name of city" value={this.state.cityName} className="form-control" autofocus onChange={this.onChange} required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="cityState" className="col-sm-3 control-label">State</label>
                        <div className="col-sm-9">
                          <input type="text" id="cityState" name="cityState" placeholder="eg: MH" value={this.state.cityState} className="form-control" onChange={this.onChange} required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="cityCountry" className="col-sm-3 control-label">Country</label>
                        <div className="col-sm-9">
                          <input type='text' id="cityCountry" name="cityCountry" placeholder="eg: india" value={this.state.cityCountry} className="form-control" onChange={this.onChange} required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="pincode" className="col-sm-3 control-label">Pincode</label>
                        <div className="col-sm-9">
                          <input type='number' id="pincode" name="pincode" placeholder="eg: 410101" value={this.state.pincode} className="form-control" onChange={this.onChange} required />
                        </div>
                      </div>
                      {/* <div className="form-group">
                    <label for="address" className="col-sm-3 control-label">Address</label>
                    <div className="col-sm-9">
                        <input type='text' id="address" name="address" placeholder="enter your Address"  value={this.state.address} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div>

                <div className="form-group">
                    <label for="latitude" className="col-sm-3 control-label">Latitude</label>
                    <div className="col-sm-9">
                        <input type='text' id="latitude" name="latitude" placeholder="enter latitude"  value={this.state.latitude} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div> */}

                      {/* <div className="form-group">
                    <label for="longitude" className="col-sm-3 control-label">Longitude</label>
                    <div className="col-sm-9">
                        <input type='text' id="longitude" name="longitude" placeholder="enter longitude"  value={this.state.longitude} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div> */}


                      {/* .................................................................................................... */}

                      {/* <div className="form-group">
                    <label for="cityName" className="col-sm-3 control-label">City List</label>
                    <div className="col-sm-9">
                    <select className="selectpicker"  name="cityName" onChange={this.changecity} required>
                                        <option selected disabled >Select city of Dealer</option>
                                        {
                                            this.state.city.map((c) => (
                                                <option>{c.cityName}</option> //+","+c.cityState+","+c.pincode
                                            ))
                                        }
                                    </select>
                    </div>
                </div>  */}

                      {/* <!-- /.form-group --> */}
                      <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                          <input type="button" onClick={this.submit} value="Add City" className="btn btn-primary btn-block" />
                        </div>
                      </div>
                    </form>
                    {/* <!-- /form --> */}
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
export default CityAdd;