import React from 'react';
import "./notfound.css"
import { Link } from 'react-router-dom'
const NotFound = () =>
    <div class="container my">
        <div class="row text-center">
            <div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
                <div class="row">
                    <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                        <h1 class="m-0">404</h1>
                        <h6>Page not found</h6>
                        <p>Try Again!!!</p>
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
            </div>
        </div>
    </div>

export default NotFound;