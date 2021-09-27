// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import { Link } from 'react-router-dom';
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'
// import DataTable from 

// function Car() {
class DealerAdd extends Component {
    // const [count, setCount] = useState(0);
    // const data = DataTable();
    // Similar to componentDidMount and componentDidUpdate:
    // $(document).ready(function () {
    //   $('#example').data;
    // });
    constructor(props) {
        super(props)
        this.state = {
            // cars: [],
            // message: null,
            // submit: false,
            // carNo:'',
            // carCompany:'',
            // carModel:'',
            // fuelType:'',
            // carType:'',
            // hourlyRate:0,
            // carTypes:[]
            message: null,
            submit: false,
            name: '',
            email: '',
            password: '',
            mobileNumber: 0,
            address: '',
            latitude: '',
            longitude: '',
            cityName: '',
            city: []



        }

    }
    componentDidMount = () => {
        //$('#tableID').DataTable();
        //alert("xyz")
        api.fetchAllCities()
            .then(resp => {
                //alert("xyz")
                console.log(resp.data);
                this.setState({
                    city: resp.data
                })
                //alert(this.state.bookings.id)
            })
            .catch(err => {
                console.error(err);
                //this.setState({ msg: err.response.data.message });
                toast.error(err.response.data.message);
            })

    }
    submit = () => {
        if (this.state.name === '' && this.state.email === '' && this.state.password === '' && this.state.mobileNumber === '' && this.state.address == '' && this.state.latitude == '' && this.state.longitude == '') {
            toast.error("All fields are required")
            return;
        }
        const dealer = {
            // carNo:this.state.carNo,
            // carCompany:this.state.carCompany,
            // carModel:this.state.carModel,
            // fuelType:this.state.fuelType,
            // hourlyRate:this.state.hourlyRate,

            // carStatus:false
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobileNumber: this.state.mobileNumber,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,


        }
        //alert(this.state.carType)
        //alert(did+carType)
        api.addDealer(this.state.cityName, dealer)
            .then(resp => {
                //alert("xyz")
                //console.log(resp.data);
                toast.success("Dealer Added Succesfully!")
                this.setState({
                    submit: true
                })
            })
            .catch(err => {
                console.error(err);
                //this.setState({ msg: err.response.data.message });
                toast.error(err.response.data.message);
            })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    changecity = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }
    render() {

        if (this.state.submit) {                   //     we dont need to redirect anywhere PRATUL  
            return <Redirect to="/a_all_dealers" />;
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
                                    <h4 className="card-title ">Add New Dealer</h4>
                                    <p className="card-category"> Admin can Add New Dealer HERE </p>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <form className="form-horizontal" role="form">
                                            <h2>Dealer Registration Form</h2>
                                            <div className="form-group">
                                                <label for="name" className="col-sm-3 control-label">Name</label>
                                                <div className="col-sm-9">
                                                    <input type="text" id="name" name="name" placeholder="Enter Name of Dealer" value={this.state.name} className="form-control" autofocus onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="email" className="col-sm-3 control-label">Email ID</label>
                                                <div className="col-sm-9">
                                                    <input type="text" id="email" name="email" placeholder="eg: abc@gamil.com" value={this.state.email} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="password" className="col-sm-3 control-label">Password</label>
                                                <div className="col-sm-9">
                                                    <input type='password' id="password" name="password" placeholder="password" value={this.state.password} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="mobileNumber" className="col-sm-3 control-label">Mobile No.</label>
                                                <div className="col-sm-9">
                                                    <input type='number' id="mobileNumber" name="mobileNumber" placeholder="eg: 9876543210" value={this.state.mobileNumber} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="address" className="col-sm-3 control-label">Address</label>
                                                <div className="col-sm-9">
                                                    <input type='text' id="address" name="address" placeholder="enter your Address" value={this.state.address} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="latitude" className="col-sm-3 control-label">Latitude</label>
                                                <div className="col-sm-9">
                                                    <input type='text' id="latitude" name="latitude" placeholder="enter latitude" value={this.state.latitude} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="longitude" className="col-sm-3 control-label">Longitude</label>
                                                <div className="col-sm-9">
                                                    <input type='text' id="longitude" name="longitude" placeholder="enter longitude" value={this.state.longitude} className="form-control" onChange={this.onChange} required />
                                                </div>
                                            </div>


                                            {/* .................................................................................................... */}

                                            <div className="form-group">
                                                <label for="cityName" className="col-sm-3 control-label">City List</label>
                                                <div className="col-sm-9">
                                                    <select className="selectpicker" name="cityName" onChange={this.changecity} required>
                                                        <option selected disabled >Select city of Dealer</option>
                                                        {
                                                            this.state.city.map((c) => (
                                                                <option value={c.id}>{c.cityName}</option> //+","+c.cityState+","+c.pincode
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                    <label for="hourlyRate" className="col-sm-3 control-label">Daily Rate</label>
                    <div className="col-sm-9">
                        <input type="number" id="hourlyRate" name="hourlyRate" placeholder="hourlyRate" value={this.state.hourlyRate} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div> */}
                                            {/* <!-- /.form-group --> */}
                                            {/* <div className="form-group">
                    <label className="control-label col-sm-3">Gender</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female"/>Female
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male"/>Male
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" id="uncknownRadio" value="Unknown"/>Unknown
                                </label>
                            </div>
                        </div>
                    </div>
                </div>  */}
                                            {/* <!-- /.form-group --> */}
                                            {/* <div className="form-group">
                    <label className="control-label col-sm-3">Meal Preference</label>
                    <div className="col-sm-9">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" id="calorieCheckbox" value="Low calorie"/>Low calorie
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" id="saltCheckbox" value="Low salt"/>Low salt
                            </label>
                        </div>
                    </div>
                </div>  */}
                                            {/* <!-- /.form-group --> */}
                                            {/* <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>I accept <a href="#">terms</a>
                            </label>
                        </div>
                    </div>
                </div>  */}
                                            {/* <!-- /.form-group --> */}
                                            <div className="form-group">
                                                <div className="col-sm-9 col-sm-offset-3">
                                                    <input type="button" onClick={this.submit} value="Add Dealer" className="btn btn-primary btn-block" />
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
export default DealerAdd;