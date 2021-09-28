import React, { Component } from 'react';
import $ from "jquery"
import bgimg from "../../assets/images/mainbg.jpg";
import api from "../../../service/CustomerApiService"
import { toast } from "react-toastify"
import { Redirect } from 'react-router-dom';

class HomeMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: [],
            carType: [],
            pickupDateTime: '',
            returnDateTime: '',
            cityId: '',
            carTypeId: '',
            hours: '',
            redirect: false,
            url: {}

        }
        this.componentDidMount = this.componentDidMount;
        this.pickTime = this.pickTime;
        //     // this.clickCheck = this.clickCheck;

    }
    componentDidMount = () => {
        api.fetchAllCity()
            .then(resp => {
                // console.log(resp.data)
                this.setState({ city: resp.data })
            })
            .catch(err => {
                toast.error("Something Wrong - City Not loaded")
                console.log(err.data)
                // toast.error("Something Wrong!");
            });

    }
    // onChange = (e) => {
    //     // alert(e.target.value)
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    // let history = useHistory();
    pickTime = (e) => {
        this.setState({ pickupDateTime: e.target.value });
    }
    returnTime = () => {
        // alert(this.state.pickupDateTime);
        if (this.state.pickupDateTime === "") {
            toast.warning("Please! Select Pickup Date & Time");
        } else {
            $('#returnDateTime').attr("min", new Date(this.state.pickupDateTime).toISOString().substring(0, 16));
        }
    }

    returnChange = (e) => {
        if (this.state.pickupDateTime !== "") {
            this.setState({ [e.target.name]: e.target.value });

        }
    }
    clickCheck = () => {
        // alert(this.state.carTypeId, this.state.cityId)
        if (this.state.cityId === "") {
            toast.warning("Please! Select Pickup City")
            return;
        }
        if (this.state.carTypeId === "") {
            toast.warning("Please! Select Car Type")
            return;
        }
        if (this.state.pickupDateTime === "") {
            toast.warning("Please! Select Pickup Date & Time")
            return;
        }
        if (this.state.returnDateTime === "") {
            toast.warning("Please! Select Return Date & Time")
            return;
        }

        var hr = (new Date(this.state.returnDateTime) - new Date(this.state.pickupDateTime)) / (60 * 60 * 1000);
        var url = "/car_list?cid=" + this.state.cityId + "&&ctid=" + this.state.carTypeId + "&&pdt=" + this.state.pickupDateTime + "&&rdt=" + this.state.returnDateTime + "&hr=" + hr;
        this.setState({
            redirect: true,
            url: url,
            hours: hr
        });
        sessionStorage.setItem("done", 1)
    }
    pickCitySelect = (e) => {

        this.setState({ cityId: e.target.value })
        console.log(e.target.value)
        api.fetchAllCarTypeByCityId(e.target.value)
            .then(resp => {
                // console.log(resp.data)
                this.setState({ carType: resp.data })
            })
            .catch(err => {
                // $('#details').text(err.response.data.message)
                console.log(err)
                // toast.error("Something Wrong!");
                toast.error("we are cooming to your location");

            });

    }
    carTypeSelect = (e) => {
        this.setState({ carTypeId: e.target.value })
        var myct = this.state.carType.filter(c => {
            return c.id == e.target.value;
        })
        $('#details').html(myct[0].carTypeName + " = " + myct[0].carIncludes + "<br>(<i class='material-icons person_icon'>person</i> - " + myct[0].personCapacity + ")");
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.url} />
        }
        const style = {
            width: "100%",
            // backgroundColor: "red",
            backgroundImage: `url(${bgimg})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "1",
        }



        return (
            <div>
                {/* <!-- ***** Main Banner Area Start ***** --> */}
                <div className="main-banner" id="top" style={style}>
                    <div className="image-overlay header-text">
                        <div className="caption">
                            {/* <h6>Lorem ipsum dolor sit amet</h6> */}
                            <h2><em>Rent a car,</em> with JustDrive</h2>

                        </div>
                        <form className="form my-book-form">
                            <div className="row">
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Select Pickup City</label>
                                    <select className="selectpicker" name="pickupCity" required onChange={this.pickCitySelect}>
                                        <option selected disabled>Select Pickup City</option>
                                        {
                                            this.state.city.map((c) => (
                                                <option value={c.id}>{c.cityName + ", " + c.cityState}</option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <div className="form-input col-md-2 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Select Car Type</label>
                                    <select className="selectpicker" name="carType" required onChange={this.carTypeSelect}>
                                        <option selected disabled >Select Car Type</option>
                                        {
                                            this.state.carType.map((c) => (
                                                <option value={c.id}>{c.carTypeName}</option>
                                            ))
                                        }
                                    </select>
                                    {/* <div className=""> */}
                                    {/* <div className="car_type_details" id="car_type_details" onFocus={this.foc}>Details</div> */}
                                    <div className="details" id="details">
                                        {/* Nitesh */}
                                    </div>
                                    {/* </div> */}
                                    {/* <!-- Modal --> */}
                                    {/* <div class="modal" id="cartypeDetails" tabindex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" style={{ zIndex: "20 !important" }} role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Pickup Date & Time</label>
                                    {/* onBlur={pickTime} */}
                                    <input type="datetime-local" id="pickupDateTime" name="pickupDateTime" value={this.state.pickupDateTime} placeholder="Pickup Date & Time" required="" min={new Date().toISOString().substring(0, 16)} onChange={this.pickTime} data-date-format="YYYY-MM-DD HH:mm" />
                                    {/* <DateTimePicker className="dateTime" onChange={onChange}
                                    value={value} /> */}
                                </div>
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Return Date & Time</label>
                                    {/* onClick={returnTime} */}
                                    <input type="datetime-local" id="returnDateTime" name="returnDateTime" value={this.state.returnDateTime} placeholder="Return Date & Time" required="" onChange={this.returnChange} onClick={this.returnTime} data-date-format="YYYY-MM-DD HH:mm" />
                                </div>
                                {/* <div className="form-input col-md-2 col-sm-6 mt-3">
                                {/* <label>Price </label> 
                                <input type="text" name="" placeholder="Max Price ($)" required />
                            </div> */}
                                {/* </div> */}
                                {/* <div className="row"> */}
                                <div className="bottom-btn col-md-1 col-sm-6 mt-5 pt-2">
                                    {/* <label>Check availability </label> */}
                                    <input type="button" id="btni" className="btn btn-style btn-primary w-100 px-2" value="Check" onClick={this.clickCheck} />
                                </div>

                                {/* //try */}
                                {/* <SimpleSelect placeholder="Select a fruit" onValueChange={value => alert(value)}>
                                <option value="apple">apple</option>
                                <option value="mango">mango</option>
                                <option value="orange">orange</option>
                                <option value="banana">banana</option>
                            </SimpleSelect> */}
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- ***** Main Banner Area End ***** --> */}
            </div>
        )
    }
}
export default HomeMain;