import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./css/success.css"
import { Redirect } from 'react-router-dom';
class BDone extends Component {
    constructor(props) {
        super(props)
        // alert(sessionStorage.getItem("done"))

        var myred = false;
        // alert(sessionStorage.getItem("done"))
        if (sessionStorage.getItem("done") !== '2') {
            myred = true;
        }
        this.state = {
            redirect: myred,
            url: '/',

        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.url} />
        }
        return (
            <div className="b_done">
                <div className="d_card">
                    <div clasName="card_inner">
                        <i className="checkmark">✓</i>
                    </div>
                    <h1 className="name">Success</h1>
                    <p className="pName">Your request successfully Save.<br /> Go to home.</p>
                    <br />
                    <div className="btmm">
                        <Link to="/"><button className="mubtn">
                            Back to Home
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button></Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default BDone;