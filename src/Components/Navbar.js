import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="/" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 display-5"><span className="text-primary">Shagun</span>Sharma</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav m-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/quality" className="nav-item nav-link">Quality</Link>
                        <Link to="#skill" className="nav-item nav-link">Skill</Link>
                        {/* <a href="#service" className="nav-item nav-link">Service</a> */}
                        {/* <a href="#portfolio" className="nav-item nav-link">Portfolio</a> */}
                        {/* <a href="#testimonial" className="nav-item nav-link">Review</a> */}
                        {/* <a href="#blog" className="nav-item nav-link">Blog</a> */}
                        <Link to="#contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <a href="" className="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}
