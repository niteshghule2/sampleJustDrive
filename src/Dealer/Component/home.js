// import logo from "./logo.svg";
// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
// import bgvideo from "../assets/images/video.mp4";
// import { Link } from "react-router-dom"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { render } from "@testing-library/react";
import { Component } from "react";
import api from "../../service/DealerApiService"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"


class Home extends Component {
  // const counter = useSelector((state) => state.counter);

  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const clicks = () => {
  //     history.push('/dealer')
  // }
  constructor(props) {
    super(props)
    this.state = {
      dashboard: []
    }
  }

  componentDidMount = () => {
    //console.log("first");
    api.fetchDashboard(sessionStorage.getItem("did"))
      .then(resp => {
        //alert("xyz")
        console.log(resp.data);
        this.setState({
          dashboard: resp.data
        })
        //alert(this.state.bookings.id)
      })
      .catch(err => {
        console.error(err);
        //this.setState({ msg: err.response.data.message });
        toast.error(err.response.data.message);
      })

  }

  render() {
    //console.log("second");

    return (
      //<div >
      // {/* <!-- ***** Main Banner Area Start ***** --> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">directions_car</i>
                </div>
                <p className="card-category">Avail Cars</p>
                <h3 className="card-title">{this.state.dashboard.availableCarCount}/{this.state.dashboard.allCarCount}
                  {/* <small>GB</small> */}
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">collections_bookmark</i>
                </div>
                <p className="card-category">Total Bookings</p>
                <h3 className="card-title">{this.state.dashboard.allBookingsCount}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">watch</i>
                </div>
                <p className="card-category">Pending Bookings</p>
                <h3 className="card-title">{this.state.dashboard.allPendingBCount}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">fact_check</i>
                </div>
                <p className="card-category">Completed Bookings</p>
                <h3 className="card-title">{this.state.dashboard.allCompletedBCount}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-success">
                <div className="ct-chart" id="dailySalesChart"></div>
              </div>
              <div className="card-body">
                <Link to="/d_all_bookings"><h4 className="card-title">Completed Bookings</h4></Link>
                <p className="card-category">
                  <span className="text-success">Goto Completed bookings.</span></p>
                {/* <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p> */}
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-warning">
                <div className="ct-chart" id="websiteViewsChart"></div>
              </div>
              <div className="card-body">
                <Link to="/d_ongoing_bookings"><h4 className="card-title">Ongoing Bookings</h4></Link>
                <p className="card-category">Display Ongoing Bookings</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-danger">
                <div className="ct-chart" id="completedTasksChart"></div>
              </div>
              <div className="card-body">
                <Link to="/d_pending_bookings"><h4 className="card-title">Pending Bookings</h4></Link>
                <p className="card-category">Bookings</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title">Tasks:</span>
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#profile" data-toggle="tab">
                            <i className="material-icons">bug_report</i> Bugs
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#messages" data-toggle="tab">
                            <i className="material-icons">code</i> Website
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#settings" data-toggle="tab">
                            <i className="material-icons">cloud</i> Server
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="messages">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="settings">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked></input>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Employees Stats</h4>
                  <p className="card-category">New employees on 15th September, 2016</p>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <th>ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Country</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- ***** Call to Action End ***** --> */}
      </div>
    );
  }
}

export default Home;
