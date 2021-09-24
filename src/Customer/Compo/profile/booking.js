
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from "jquery"
import "datatables.net"
class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: '',
      firstName: '',
      bauthenticate: (sessionStorage.getItem("cid") !== null)
    }

  };
  componentDidMount = () => {
    if (sessionStorage.getItem("cid") !== null) {
      this.state = ({
        id: sessionStorage.getItem("cid"),
        firstName: sessionStorage.getItem("cfname"),
        bauthenticate: true
      })
    }
    $('#tableID').DataTable();
  }

  render() {
    if (this.state.bauthenticate === false) {
      return <Redirect to="/" />
    }
    return (
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row" >
          <div className="col-md-12" style={{ marginTop: "30px" }}>
            <div className="card">
              <div className=" myheader">
                <h4 className="card-title " >All Bookings</h4>
                <p className="card-category" style={{ color: "white" }}> Here is your all bookings history!</p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th>Booking Id</th>
                        <th>Booking Date & Time</th>
                        <th>Pickup City</th>
                        <th>Car Type</th>
                        {/* <th>Pickup Date & Time</th> */}
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>23 Sep 2021 12:30</td>
                        <td>Pune, Maharashtra</td>
                        <td>Seden</td>
                        {/* <td>23 Sep 2021 12:30</td> */}
                        <td><button class="btn btn-primary">View</button></td>
                      </tr>
                      <tr>
                        <td>ST2</td>
                        <td>Wincy</td>
                        <td>36</td>
                        <td>Female</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>ST3</td>
                        <td>Ashmita</td>
                        <td>41</td>
                        <td>Female</td>
                        <td>860</td>
                      </tr>
                      <tr>
                        <td>ST4</td>
                        <td>Kelina</td>
                        <td>32</td>
                        <td>Female</td>
                        <td>433</td>
                      </tr>
                      <tr>
                        <td>ST5</td>
                        <td>Satvik</td>
                        <td>41</td>
                        <td>male</td>
                        <td>162</td>
                      </tr>
                      <tr>
                        <td>ST6</td>
                        <td>William</td>
                        <td>37</td>
                        <td>Female</td>
                        <td>372</td>
                      </tr>
                      <tr>
                        <td>ST7</td>
                        <td>Chandan</td>
                        <td>31</td>
                        <td>male</td>
                        <td>375</td>
                      </tr>
                      <tr>
                        <td>ST8</td>
                        <td>David</td>
                        <td>45</td>
                        <td>male</td>
                        <td>327</td>
                      </tr>
                      <tr>
                        <td>ST9</td>
                        <td>Harry</td>
                        <td>29</td>
                        <td>male</td>
                        <td>205</td>
                      </tr>
                      <tr>
                        <td>ST10</td>
                        <td>Frost</td>
                        <td>29</td>
                        <td>male</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>ST11</td>
                        <td>Ginny</td>
                        <td>31</td>
                        <td>male</td>
                        <td>560</td>
                      </tr>
                      <tr>
                        <td>ST12</td>
                        <td>Flod</td>
                        <td>45</td>
                        <td>Female</td>
                        <td>342</td>
                      </tr>
                      <tr>
                        <td>ST13</td>
                        <td>Marshy</td>
                        <td>23</td>
                        <td>Female</td>
                        <td>470</td>
                      </tr>
                      <tr>
                        <td>ST13</td>
                        <td>Kennedy</td>
                        <td>43</td>
                        <td>male</td>
                        <td>313</td>
                      </tr>
                      <tr>
                        <td>ST14</td>
                        <td>Fiza</td>
                        <td>31</td>
                        <td>Female</td>
                        <td>750</td>
                      </tr>
                      <tr>
                        <td>ST15</td>
                        <td>Silva</td>
                        <td>34</td>
                        <td>male</td>
                        <td>985</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bookings;