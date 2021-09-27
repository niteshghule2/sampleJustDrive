// import { getByDisplayValue } from "@testing-library/dom";

import React, { Component, useEffect } from 'react';
import $ from "jquery"
import "datatables.net"
import api from "../../service/AdminApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
// import DataTable from 


class MessageList extends Component {


  constructor(props) {
    super(props)
    this.state = {
      message: [],

    }

  }
  componentDidMount = () => {

    // $('#tableID').DataTable();
    //     this.reloadUserList();
    //   }
    // reloadUserList() {

    api.fetchAllMsg()
      .then(resp => {
        //alert("xyz")
        console.log(resp.data);
        this.setState({
          message: resp.data
        })



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

                  <h4 className="card-title ">Feedback Messages</h4>
                  <p className="card-category"> Here Is a List of All FeedBacks for "JustDRIVE"</p>
                  {/* <Link to="/a_add_city"className="btn btn-style btn-success "> Add New City</Link> */}
                </div>


                <div className="card-body">
                  <div className="table-responsive">
                    <table id="tableID" className="table table-striped" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Subject</th>
                          <th>Message</th>


                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.message.map(
                            message =>
                              <tr key={message.id}>
                                <td>{message.id}</td>
                                <td>{message.name}</td>
                                <td>{message.email}</td>
                                <td>{message.subject}</td>
                                <td>{message.msg}</td>



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
export default MessageList;