import React from "react";
import "../main/main.css";
import TechStack from "./techStack/TechStack";
export default function Main() {
  return (
    <>
      <div
        className=" container-fluid"
        style={{ backgroundColor: "rgb(163, 230, 240)" }}
      >
        <div className="container">
          <div className="  row d-flex justify-content-center  align-items-center">
            <div className="col-md-6 -2">
              {" "}
              <div className="row">
                <div className="col" style={{ fontSize: "30px" }}>
                  We Produce
                </div>
              </div>
              <div className="row">
                <div
                  className="col text-primary "
                  style={{ fontSize: "50px", fontWeight: "bold" }}
                >
                  What You Think!
                </div>
              </div>
              <div className="row">
                <div
                  className="col"
                  style={{ fontSize: "20px", fontWeight: "5px" }}
                >
                  You'll find the most up-to-date programmers and technologies
                  to help you create the most innovative and cutting-edge
                  software solutions.
                </div>
              </div>
              <div className="row mt-4">
                <div className="col text-white ">
                  <button className="btn btn-dark p-3 bg-dark text-white">
                    {" "}
                    Book Your Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <img
                src="https://gwayerp.com/assets/images/heroimage.webp"
                alt="imag"
                style={{ height: "80vh", width: "50vw" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-around   mt-4 mb-4">
        <div className="row">
          <div
            className="count text-primary  "
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            150+
          </div>
          <div className="tag mx-3 ">Projects</div>
        </div>
        <div className="row">
          <div
            className="count-clients text-primary  "
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            70+
          </div>
          <div className="tag mx-3">Clients</div>
        </div>
        <div className="row">
          <div
            className="count-award   "
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            10+
          </div>
          <div className="tag mx-3">Awards</div>
        </div>
        <div className="row">
          <div
            className="count-percent   "
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            100%
          </div>
          <div className="tag ">Satisfied Customers</div>
        </div>
      </div>
      {/*PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPp*/}
      <div className="container  " style={{ marginTop: "150px" }}>
        <div className="row d-flex d-flex justify-content-between">
          <div className="col-md-6">
            <div
              className="text-md"
              style={{ fontSize: "40px", fontWeight: "bold" }}
            >
              We Are{" "}
              <span className="text" style={{ color: "#b89126" }}>
                Unique!
              </span>
            </div>
            <div className="mt-4">
              Since 2014, we are a leading software provider with futuristic
              business analytics.
            </div>
            <div className="mt-4">
              We prioritize delivering cutting-edge technology combined with
              design brilliance by putting the customer's needs first.
            </div>
            <div className="mt-4">
              We focus on every aspect of your long-term success over short-term
              business goals.
            </div>
            <div className="mt-4">
              We assist in streamlining and organizing a variety of business
              processes to achieve maximum profitability and client
              satisfaction.
            </div>
            <div className="mt-4">
              We offer high-quality software development services that will help
              your business grow.
            </div>
            <div className="mt-4">
              Get the best outsourcing solutions from our team of experts now
            </div>
          </div>
          <div className="col  -4 d-flex justify-content-end">
            <img
              src="https://gwayerp.com/assets/images/uni.webp"
              alt=""
              srcSet=""
              height={"450px"}
              width={"80%"}
            />
          </div>
        </div>
      </div>
      {/****************************************************************************************8*/}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          <div>
            Experience The Most{" "}
            <span style={{ color: "#1ab9a3" }}>Customized</span> ERP
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6 text-center" style={{ fontSize: "20px" }}>
            Create your own custom ERP software solutions for your business with
            the right people, based on your current infrastructure,
            capabilities, and resources.
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/*******************card impementation*************************/}

      <div className="container shadow cards " style={{ marginTop: "100px" }}>
        <div className="row mt-4 pt-4 ">
          <div className="col">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  {" "}
                  <i class="bi bi-tattoo"></i>User Friendly
                </h5>
                <p class="card-text">
                  Our application is easy to access and retrieve the data, with
                  more pictorial representations and reports
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  Support
                </h5>
                <p class="card-text">
                  We offer 24/7 support to rectify the issues you faced for
                  healthy business outcomes without any interruptions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  Cost Control
                </h5>
                <p class="card-text">
                  To excel in the market, along with quality, cost optimization
                  is preferred. We balance the product with the cost, which is
                  more effective to sustain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pb-4">
          <div className="col">
            <div
              class="card"
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  Powerful Dashboard
                </h5>
                <p class="card-text">
                  Our customized dashboard illustrates the vital information
                  that users prefer to showcase to customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card"
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  Unique Feature
                </h5>
                <p class="card-text">
                  Detailed analysis of the requirements and making a dedicated
                  application for the user to access with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#ba3991" }}>
                  Smart Notification
                </h5>
                <p class="card-text text-center">
                  We offer an alert management system in the payment and stock
                  areas to avoid the last-minute rush, as we value the
                  customer's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          <div>
            Our <span style={{ color: "#1ab9a3" }}>Modules</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center align-items-center "
            style={{ fontSize: "20px" }}
          >
            GwayERP is a custom software development organization that aims to
            provide customized functionality that meets a company's specific
            operational and strategic requirements.
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          <div>
            Unlock The Endless Possibilities With{" "}
            <span style={{ color: "#1ab9a3" }}>GwayERP</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center align-items-center "
            style={{ fontSize: "20px" }}
          >
            GwayERP is a custom software development organization that aims to
            provide customized functionality that meets a company's specific
            operational and strategic requirements.
          </div>
          <div className="col-3"></div>
        </div>
      </div>

      {/*video***************************************************8*/}
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5  position-relative  -1 ">
        <div className="" style={{ position: "absolute", top: "100px" }}>
          <video width="940" height="460" controls>
            <source src="https://youtu.be/_LHptKGiuM" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="d d-block"
          style={{ marginTop: "280px", maxWidth: "100%" }}
        >
          <img
            className="d d-block"
            src="https://gwayerp.com/assets/images/visionback.webp"
            alt=""
          />
        </div>
      </div>
      <div className="container position-relative ">
        <div
          className="row position-absolute  -2 "
          style={{ top: "-200px", width: "100vw" }}
        >
          <div
            className="col  -2 text-center text-white"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            A company that was founded with a
          </div>
          <div
            className="text-center text-white "
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            Global Vision In Mind.
          </div>
        </div>
      </div>
      {/****************************tech stack*********************** */}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          <div>
            Our <span style={{ color: "#1ab9a3" }}>Tech Stack</span>
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6 text-center" style={{ fontSize: "20px" }}>
            We are skilled at developing cutting-edge technology in a commercial
            environment that is constantly evolving.
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <TechStack />
      {/*********************implement tech stac **************/}
      <div className="container" style={{ marginTop: "150px" }}>
        <div
          className="row text-center "
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          <div>
            Our <span style={{ color: "#1ab9a3" }}> SDLC </span>Methodology
          </div>
        </div>
        <div className="row ">
          <div className="col-3"></div>
          <div
            className="col-6 d-flex justify-content-center text-center"
            style={{ fontSize: "20px" }}
          >
            We prioritize providing solutions with zero downtime and ensuring
            that business operations run smoothly.
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <img src="https://gwayerp.com/assets/svg/sdlc.svg" alt="" />
        </div>
      </div>
      {/**************************8happy customers **********************************8*/}
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://gwayerp.com/assets/images/revback.webp"
              alt="logo"
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm ">happy customers</div>
            </div>
            <div className="row">
              <div className="col">carasol</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
