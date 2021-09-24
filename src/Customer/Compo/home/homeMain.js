import React, { Component } from 'react';
import bgimg from "../../assets/images/mainbg.jpg";
import api from "../../../service/CustomerApiService"
import { toast } from "react-toastify"
import $ from "jquery"
class HomeMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: [],
            carType: [],
            pickupDateTime: '',
            returnDateTime: '',
            day: '',
            authenticate: false
        }
        this.componentDidMount = this.componentDidMount;
        // this.pickTime = this.pickTime;
        // this.clickCheck = this.clickCheck;
    }
    componentDidMount = () => {
        api.fetchAllCity()
            .then(resp => {
                // console.log(resp.data)
                this.setState({ city: resp.data })
            })
            .catch(err => {
                console.log(err.data)
                toast.error("Something Wrong!");
            });
        api.fetchAllCarType()
            .then(resp => {
                console.log(resp.data)
                this.setState({ carType: resp.data })
            })
            .catch(err => {
                console.log(err.data)
                toast.error("Something Wrong!");
            });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // let history = useHistory();

    render() {
        // console.log(this.state.city);
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
        function clickCheck() {

        }
        function pickTime(e) {
            // this.setState({ pickupDateTime: e.target.value });
            // alert(this.state.pickupDateTime)
            // alert(this.state.pickupDateTime)
            // console.log(this.state.returnDateTime)
            // $('#returnDateTime').attr("min", new Date().toISOString().substring(0, 16));
        }
        function returnTime() {
            console.log(this.state.pickupDateTime)
            // $('#returnDateTime').attr("min", new Date().toISOString().substring(0, 16));
        }
        return (
            <div>{console.log(this.state.city)}
                {/* <!-- ***** Main Banner Area Start ***** --> */}
                <div className="main-banner" id="top" style={style}>
                    <div className="image-overlay header-text">
                        <div className="caption">
                            {/* <h6>Lorem ipsum dolor sit amet</h6> */}
                            <h2><em>Rent a car,</em> with JustDrive</h2>

                        </div>
                        <form action="" onSubmit="return false" method="post" className="form my-book-form">
                            <div className="row">
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Select Pickup City</label>
                                    <select className="selectpicker">
                                        <option selected>Select Pickup City</option>
                                        {
                                            this.state.city.map((c) => (
                                                <option value={c.id}>{c.cityName + ", " + c.cityState}</option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <div className="form-input col-md-2 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Select Car Type</label>
                                    <select className="selectpicker">
                                        <option selected disabled>Select Car Type</option>
                                        {
                                            this.state.carType.map((c) => (
                                                <option value={c.id}>{c.carTypeName}</option>
                                            ))
                                        }
                                    </select>
                                    <div disabled className="car_type_details" id="car_type_details">Details</div>
                                </div>
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Pickup Date & Time</label>
                                    <input type="datetime-local" id="pickupDateTime" name="pickupDateTime" placeholder="Pickup Date & Time" required="" min={new Date().toISOString().substring(0, 16)} onBlur={pickTime} />
                                    {/* <DateTimePicker className="dateTime" onChange={onChange}
                                    value={value} /> */}
                                </div>
                                <div className="form-input col-md-3 col-sm-6 mt-3">
                                    <label style={{ color: "white" }}>Return Date & Time</label>
                                    <input type="datetime-local" id="returnDateTime" name="returnDateTime" placeholder="Return Date & Time" required="" onClick={returnTime} />
                                </div>
                                {/* <div className="form-input col-md-2 col-sm-6 mt-3">
                                {/* <label>Price </label> 
                                <input type="text" name="" placeholder="Max Price ($)" required />
                            </div> */}
                                {/* </div> */}
                                {/* <div className="row"> */}
                                <div className="bottom-btn col-md-1 col-sm-6 mt-5 pt-2">
                                    {/* <label>Check availability </label> */}
                                    <button className="btn btn-style btn-primary w-100 px-2" onClick={clickCheck}>Check</button>
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