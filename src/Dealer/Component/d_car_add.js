// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import { Link } from 'react-router-dom';
import api from "../../service/DealerApiService"
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'
// import DataTable from 

// function Car() {
class CarAdd extends Component {
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
        submit: false,
        carNo:'',
        carCompany:'',
        carModel:'',
        fuelType:'',
        carType:'',
        hourlyRate:0,
        carTypes:[]
    }
    // this.deleteUser = this.deleteUser.bind(this);
    // this.editUser = this.editUser.bind(this);
    // this.addUser = this.addUser.bind(this);
   // this.reloadUserList = this.reloadUserList.bind(this);
}
  componentDidMount = () => {
     //$('#tableID').DataTable();
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
      api.fetchAllCarType()
            .then(resp => {
                console.log(resp.data)
                this.setState({ carTypes: resp.data })
            })
            .catch(err => {
                console.log(err.data)
                // toast.error("Something Wrong!");
            });
  }
  submit=()=>{
      if(this.state.carNo===''&& this.state.carCompany==='' && this.state.carModel==='' && this.state.fuelType==='' && this.state.hourlyRate==''){
          toast.error("All fields are required")
          return ;
      }
      const car={
        carNo:this.state.carNo,
        carCompany:this.state.carCompany,
        carModel:this.state.carModel,
        fuelType:this.state.fuelType,
        hourlyRate:this.state.hourlyRate,

        carStatus:false

      }
    //alert(this.state.carType)
    //alert(did+carType)
    api.addCar(sessionStorage.getItem("did"),this.state.carType ,car)
    .then(resp => {
        //alert("xyz")
        //console.log(resp.data);
        toast.success("Car Added Succesfully!")
        this.setState({
          submit:true
        })
    })
    .catch(err => {
      console.error(err);
      //this.setState({ msg: err.response.data.message });
      toast.error(err.response.data.message);
  })
  }

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
    }
    changeCarType =(e)=>{
        this.setState({
            carType:e.target.value
        })
    }
  render() {

    if (this.state.submit) {
        return <Redirect to="/d_car" />;
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
                  <h4 className="card-title ">Add car</h4>
                  <p className="card-category"> this is in car add </p>
                </div>
                <div className="card-body">
                <div className="container">
            <form className="form-horizontal" role="form">
                <h2>Registration Form</h2>
                <div className="form-group">
                    <label for="carNo" className="col-sm-3 control-label">Car No</label>
                    <div className="col-sm-9">
                        <input type="text" id="carNo" name="carNo" placeholder="Enter Car Number" value={this.state.carNo} className="form-control" autofocus onChange={this.onChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="carCompany" className="col-sm-3 control-label">Company Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="carCompany" name="carCompany" placeholder="Company" value={this.state.carCompany} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="carModel" className="col-sm-3 control-label">Model</label>
                    <div className="col-sm-9">
                        <input type="text" id="carModel" name="carModel" placeholder="Model Name" value={this.state.carModel} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="fuelType" className="col-sm-3 control-label">Type of Fuel</label>
                    <div className="col-sm-9">
                        <input type="text" id="fuelType" name="fuelType" placeholder="fuelType"  value={this.state.fuelType} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="carType" className="col-sm-3 control-label">Car Type</label>
                    <div className="col-sm-9">
                    <select className="selectpicker"  name="carType" onChange={this.changeCarType} required>
                                        <option selected disabled >Select Car Type</option>
                                        {
                                            this.state.carTypes.map((c) => (
                                                <option value={c.id}>{c.carTypeName}</option>
                                            ))
                                        }
                                    </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label for="hourlyRate" className="col-sm-3 control-label">Daily Rate</label>
                    <div className="col-sm-9">
                        <input type="number" id="hourlyRate" name="hourlyRate" placeholder="hourlyRate" value={this.state.hourlyRate} className="form-control" onChange={this.onChange} required/>
                    </div>
                </div>
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
                        <input type="button" onClick={this.submit} value="Add Car"className="btn btn-primary btn-block"/>
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
export default CarAdd;