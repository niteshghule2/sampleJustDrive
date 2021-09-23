import React from 'react';
import bgimg from "../../assets/images/mainbg.jpg";
import api from "../../../service/CustomerApiService"
import { useHistory } from "react-router-dom";
function HomeMain() {
    let history = useHistory();
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
    const click = () => {
        api.fetchUsers().then(resp => {
            alert(resp.data.city);
            history.push("/login");
            // histry.push('/login');
        }).catch(err => {
            //  console.error(err);
            console.error("in err ", err.response.data);
            //err.response.data => DTO on the server side : ErrorResponse
            alert(err.response.data.message);
            // this.props.history.push('/users');
        });
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
                    <form action="" onSubmit="return false" method="post" className="form my-book-form">
                        <div className="row">
                            <div className="form-input col-md-3 col-sm-6 mt-3">
                                <label style={{ color: "white" }}>Select Pickup City</label>
                                <select className="selectpicker" onClick={click}>
                                    <option selected>Select Pickup City</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </select>

                            </div>
                            <div className="form-input col-md-2 col-sm-6 mt-3">
                                <label style={{ color: "white" }}>Select Car Type</label>
                                <select className="selectpicker">
                                    <option selected>Select Car Type</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </select>
                                <div disabled className="car_type_details" id="car_type_details">Details</div>
                            </div>
                            <div className="form-input col-md-3 col-sm-6 mt-3">
                                <label style={{ color: "white" }}>Pickup Date & Time</label>
                                <input type="datetime-local" name="" placeholder="Pickup Date & Time" required="" min={new Date().toISOString().substring(0, 16)} />
                                {/* <DateTimePicker className="dateTime" onChange={onChange}
                                    value={value} /> */}
                            </div>
                            <div className="form-input col-md-3 col-sm-6 mt-3">
                                <label style={{ color: "white" }}>Return Date & Time</label>
                                <input type="datetime-local" name="" placeholder="Return Date & Time" required="" />
                            </div>
                            {/* <div className="form-input col-md-2 col-sm-6 mt-3">
                                {/* <label>Price </label> 
                                <input type="text" name="" placeholder="Max Price ($)" required />
                            </div> */}
                            {/* </div> */}
                            {/* <div className="row"> */}
                            <div className="bottom-btn col-md-1 col-sm-6 mt-5 pt-2">
                                {/* <label>Check availability </label> */}
                                <button className="btn btn-style btn-primary w-100 px-2" >Check</button>
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
export default HomeMain;