import React from 'react'
import profile from '../Assets/img/resize-166117781311332297521661177358463.jpg'

export default function About() {

  return (
    <>
    {/* <!-- About Start --> */}
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style= {{ WebkitTextStroke: "1px #dee2e6"}}>About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid rounded w-100" src={profile} alt="" />
                </div>
                <div className="col-lg-7">
                    <h3 className="mb-4">Fullstack Software Engineer </h3>
                    <p>Meticulous Fullstack Software Engineer with 3+ years of experience designing and developing software solutions.
                        In-depth understanding of web technologies with focus on delivering innovative business solutions. Excels in fast-paced, high-energy and deadline-driven environment with willingness to take on additional
                        tasks.</p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Shagun Sharma</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">09 December 1999</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Diploma In Computer Science</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">3+ Years</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+91 9996632053</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">sharmashagun426@gmail.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Noida</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                    </div>
                    <a href={""} className="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href={""} className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
    </>
  )
}
