// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
// import DataTable from 

// function Car() {
class Car extends Component {
  // const [count, setCount] = useState(0);
  // const data = DataTable();
  // Similar to componentDidMount and componentDidUpdate:
  // $(document).ready(function () {
  //   $('#example').data;
  // });
  componentDidMount = () => {
    $('#tableID').DataTable();
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Simple Table</h4>
                  <p className="card-category"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" class="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>StudentID</th>
                          <th>StudentName</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Marks Scored</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ST1</td>
                          <td>Prema</td>
                          <td>35</td>
                          <td>Female</td>
                          <td>320</td>
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
      </div>
    );
  }
}
export default Car;