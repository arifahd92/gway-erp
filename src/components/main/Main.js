import React from "react";
import "../main/main.css";
import TechStack from "./techStack/TechStack";
import ContactForm from "./Form/ContectForm";
import TextRunner from "./textRunner/TextRunner";
import MailOutlineIcon from "@mui/icons-material/Mail";
import { CallOutlined, WhatshotOutlined } from "@mui/icons-material";

export default function Main() {
  return (
    <>
      <div
        className=" container-fluid mt-3"
        style={{
          backgroundColor: ")",
          backgroundImage: "url(https://gwayerp.com/assets/images/grad1.webp)",
        }}
      >
        <div className="container">
          <div className="  row d-flex  justify-content-between  align-items-center  -danger -3">
            <div className="col-md-6 ">
              {" "}
              <div className="row  -danger ">
                <div
                  className="col produce "
                  style={{
                    fontSize: "40px",
                    marginTop: "70px",
                    opacity: "0.9",
                  }}
                >
                  We Produce
                </div>
              </div>
              <div className="row produce" style={{ minWidth: "200px" }}>
                <div
                  className="col produce  "
                  style={{
                    fontSize: "5vw",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(90deg, rgb(39, 227, 208), rgb(136, 216, 112))",
                    webkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <TextRunner className="runner" />
                </div>
              </div>
              <div className="row mt-3 produce">
                <div
                  className="col produce "
                  style={{
                    fontSize: "23px",
                    fontWeight: "400",
                    color: "rgb(58, 59, 58)",
                    opacity: "0.7",
                  }}
                >
                  You'll find the most up-to-date programmers and technologies
                  to help you create the most innovative and cutting-edge
                  software solutions.
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-white produce  -danger">
                  <button
                    className="btn text-white bookbtn "
                    style={{
                      padding: "15px",
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      backgroundColor: "#021613",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    Book Your Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6  heroImageContainer text-center  pt-5 d-flex justify-content-center  align-items-center ">
              <img
                className="  heroImage  "
                src="https://gwayerp.com/assets/images/heroimage.webp"
                alt="imag"
              />
            </div>
          </div>
        </div>
      </div>

      {/* awards and acievements """""""""""""""""""""""""""""""""""""""""""""""""*/}
      <div className="container " style={{ marginTop: "170px" }}>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div
              className="count  text-center "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#08cbf5",
              }}
            >
              150+
            </div>
            <div className="tag  text-center  -1  ">Projects</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div
              className="count-clients  text-center "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#34d8d1",
              }}
            >
              70+
            </div>
            <div className="tag  text-center ">Clients</div>
          </div>
          <div className="col-md-3 col-sm-6">
            {" "}
            <div
              className="count-award text-center  "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "rgb(95, 228, 170)",
              }}
            >
              10+
            </div>
            <div className="tag  text-center">Awards</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div
              className="count-percent text-center  "
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "rgb(127, 237, 143)",
              }}
            >
              100%
            </div>
            <div className="tag text-center ">Satisfied Customers</div>
          </div>
        </div>
      </div>

      {/*PPPPPP  we arer unique  PPPPPPPPPPPPPPPPPPPPPPPPp*/}
      <div className="container d-flex " style={{ marginTop: "200px" }}>
        <div className="row  d-flex justify-content-between">
          <div className="col-md-6 " style={{ height: "fit-content" }}>
            <div
              className="text-md"
              style={{ fontSize: "40px", fontWeight: "700" }}
            >
              We Are{" "}
              <span
                className="text"
                style={{ color: "rgb(206, 170, 88)", opacity: "0.8" }}
              >
                Unique!
              </span>
            </div>
            <div
              className="mt-4 textsUnique"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              Since 2014, we are a leading software provider with futuristic
              business analytics.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              We prioritize delivering cutting-edge technology combined with
              design brilliance by putting the customer's needs first.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              We focus on every aspect of your long-term success over short-term
              business goals.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              We assist in streamlining and organizing a variety of business
              processes to achieve maximum profitability and client
              satisfaction.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              We offer high-quality software development services that will help
              your business grow.
            </div>
            <div
              className="2 textsUnique mt-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              Get the best outsourcing solutions from our team of experts now
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ height: "500px" }}
          >
            <img
              src="https://gwayerp.com/assets/images/uni.webp"
              alt=""
              srcSet=""
              width={"80%"}
              style={{ maxHeight: "100%" }}
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
          <div style={{ color: "rgb(3, 43, 37)" }}>
            Experience The Most{" "}
            <span style={{ color: "rgb(27, 186, 164)" }}>Customized</span> ERP
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
        <div className="row  pt-4 ">
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(250, 220, 248)",
                minHeight: "150px",
              }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5 class="card-title" style={{ color: "#ba3991" }}>
                      User Friendly
                    </h5>
                    <p class="card-text ">
                      Our application is easy to access and retrieve the data,
                      with more pictorial representations and reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(219, 245, 250)",
                minHeight: "150px",
              }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(93, 93, 175)" }}
                    >
                      Support
                    </h5>
                    <p class="card-text ">
                      We offer 24/7 support to rectify the issues you faced for
                      healthy business outcomes without any interruptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(178, 224, 201)",
                minHeight: "150px",
              }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(82, 165, 87)" }}
                    >
                      Cost Control
                    </h5>
                    <p class="card-text ">
                      To excel in the market, along with quality, cost
                      optimization is preferred. We balance the product with the
                      cost, which is more effective to sustain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  pb-4">
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(60, 95, 155)" }}
                    >
                      Powerful Dashboard
                    </h5>
                    <p class="card-text ">
                      We offer an alert management system in the payment and
                      stock areas to avoid the last-minute rush, as we value the
                      customer's needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{
                backgroundColor: "rgb(211, 165, 96)",
                minHeight: "150px",
              }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5
                      class="card-title"
                      style={{ color: "rgb(181, 135, 66)" }}
                    >
                      Unique Feature
                    </h5>
                    <p class="card-text ">
                      Detailed analysis of the requirements and making a
                      dedicated application for the user to access with ease
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="card "
              style={{ backgroundColor: "#e7ccde", minHeight: "150px" }}
            >
              <div class="card-body">
                <div className=" d-flex justify-content-between">
                  <div className="-">icon</div>
                  <div className="">
                    <h5 class="card-title" style={{ color: "#ba3991" }}>
                      Smart Notification
                    </h5>
                    <p class="card-text ">
                      We offer an alert management system in the payment and
                      stock areas to avoid the last-minute rush, as we value the
                      customer's needs.
                    </p>
                  </div>
                </div>
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

      {/*again background and image*/}

      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url('https://gwayerp.com/assets/images/visionback.webp')",
          height: "600px",
          marginTop: "400px",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="videoContainer position-relative ">
          <div className="row  ">
            <div
              className=" d-flex justify-content-center"
              style={{
                position: "absolute",
                left: "35%",
                transform: "translateX(-33%)",
                top: "-250px",
                maxWidth: "80vw",
              }}
            >
              <video controls height={500} style={{ maxWidth: "90vw" }}>
                <source src="https://youtu.be/_LHptKGiuM" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="textContainer position-relative">
          <div
            className="row position-absolute  "
            style={{ top: "350px", width: "100vw" }}
          >
            <div
              className="col  -2 text-center text-white"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              A company that was founded with a
            </div>
            <div
              className="text-center text-white "
              style={{ fontSize: "75px", fontWeight: "bold" }}
            >
              Global Vision In Mind.
            </div>
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

      {/********************** contact form********************88*/}
      <div className="container" id="form">
        <div className="row">
          <div className="col-md-6">
            <div style={{ fontSize: "20px" }}>Have a</div>
            <span
              className="row"
              style={{
                fontSize: "50px",
                color: `rgb(186, 57, 145)
                `,
                fontWeight: "bold",
              }}
            >
              Project in mind?
            </span>
            <div className="row text-xl mt-4">
              Our friendly team would love to hear from you!
            </div>
            <div className="row mt-4">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className=" mt-2">
              {" "}
              <span className="material-symbols-outlined">
                <MailOutlineIcon />
              </span>
              info@gwayerp.com
            </div>
            <div className=" mt-2">
              {" "}
              <span>
                <CallOutlined />
              </span>{" "}
              +1 (979) 378-5363 /+1 (985) 316-5976
            </div>
            <div className="mt-2">
              {" "}
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
                src="https://gwayerp.com/assets/svg/wplogo.svg"
                alt=""
                srcset=""
              />{" "}
              +1 (979) 378-5363 /+1 (985) 316-5976
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
