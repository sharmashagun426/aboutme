import React, {useRef, useEffect} from 'react'
import profile from '../Assets/img/resize-166117781311332297521661177358463.jpg'
// import Typed from "react-typed";
import Typed from "typed.js";

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer",
      "Front End Developer",
      "Back End Developer"], 
      typeSpeed: 100,
      backSpeed: 20,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-primary d-flex align-items-center py-5" id="home" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-sm" src={profile} alt="" />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm,</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: "2px #ffffff" }}>Shagun Sharma</h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white">
                {/* <Typed
                strings={[
                  "Software Engineer",
                  "Front End Developer",
                  "Back End Developer"
                ]}
                typeSpeed={100}
                backSpeed={20}
                loop
              /> */}
              <span ref={el}></span>
              </h1>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="../Assets/file/ShagunResume.pdf" className="btn btn-outline-light mr-5" download>Download CV</a>
                <a href="https://in.linkedin.com/in/shagun-vashisth-7b93b317b" className="btn btn-outline-light mr-5" target="_blank">LinkedIn</a>
                {/* <button type="button" className="btn-play" data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  )
}
