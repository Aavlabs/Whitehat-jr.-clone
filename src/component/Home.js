import React from "react";

import pic2 from "../Assets/cropped.png";
import pic3 from "../Assets/last.png";
import pic4 from "../Assets/last1.png";
import pic5 from "../Assets/last2.png";
import pic6 from "../Assets/last3.png";
import { FaCalendarAlt } from "react-icons/fa";

import topimage from "../component/images/hero-image.png";

import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../component/images/image1.png";
import img2 from "../component/images/img2.png";
import img3 from "../component/images/img3.png";

import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="main-wrapper">
      {/* first section      */}
      <div className="headding">
        <h1>Your own personal teacher, Live classes</h1>
      </div>
      <div className="tables-num">
        <div className="top-text">
          <div className="container">
            <div className="box shadow1">
              <h1>Book your FREE class</h1>
              <div className="radio-t">
                <h6>For Kids</h6>
                <Form.Check type="switch" id="custom-switch" />
                <h6>For Adults (18+)</h6>
              </div>

              <div>
                <p>
                  <b>Select your child's grade/class in school</b>
                </p>
                <div className="top-table">
                  <div className="box-edge">
                    class <br /> 1
                  </div>
                  <div>
                    class <br /> 2
                  </div>
                  <div>
                    class <br /> 3
                  </div>
                  <div>
                    class <br /> 4
                  </div>
                  <div>
                    class <br /> 5
                  </div>
                  <div className="box-edge2">
                    class <br /> 6
                  </div>
                  <div className="box-edge3">
                    class <br /> 7
                  </div>
                  <div>
                    class <br /> 8
                  </div>
                  <div>
                    class <br /> 9
                  </div>
                  <div>
                    class <br /> 10
                  </div>
                  <div>
                    class <br /> 11
                  </div>
                  <div className="box-edge4">
                    class <br /> 12
                  </div>
                </div>
                <div className="box-button">
                  <h2>
                    <FaCalendarAlt /> Schedule FREE class
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-top-div">
          <img className="image-top" src={topimage} alt="" />
        </div>
      </div>

      <div className="second-part">
        <div>
          <img src={pic6} alt="Image Container" className="last3-img" />
        </div>
        <div className="sec-text">
          <h1>WhiteHat Jr is more than just coding, math and music!</h1>
          <p>
            Our proprietary, activity-based curriculum with live, real-time
            instruction generates: Problem Solving. Creative Thinking. Grit.
            Confidence. Communication.
          </p>
          <h3>🎉 🎉 And it's a lot of fun, too!</h3>
          <div className="box-button">
            <h2>
              <FaCalendarAlt /> Book a FREE trail
            </h2>
          </div>
        </div>
      </div>

      {/* Third section */}

      <div className="sec-three">
        <h1 className="card-sec-head">OUR COURSES</h1>
        <div className="sec-cards">
          <div className="card1">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/card1-user.png"
                className="card-img-top"
                alt="image"
              />
            </div>
            <h3>heeloo</h3>
            <div className="card1-link">
              <p>Learn-1-12</p>
            </div>
            <div className="box-button-sec">
              <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                <h2>Book a FREE coding class</h2>
              </a>
            </div>
          </div>
          <div className="card1">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/card2-user.png"
                className="card-img-top"
                alt="image"
              />
            </div>
            <h3>heeloo</h3>
            <div className="card1-link">
              <p>Learn-1-12</p>
            </div>
            <div className="box-button-sec">
              <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                <h2>Book a FREE coding class</h2>
              </a>
            </div>
          </div>
          <div className="card1">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/card3-user.png"
                className="card-img-top"
                alt="image"
              />
            </div>
            <h3>heeloo</h3>
            <div className="card1-link">
              <p>Learn-1-12</p>
            </div>
            <div className="box-button-sec">
              <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                <h2>Book a FREE coding class</h2>
              </a>
            </div>
          </div>
          <div className="card1">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/music_for_adults.png"
                className="card-img-top"
                alt="image"
              />
            </div>
            <h3>heeloo</h3>
            <div className="card1-link">
              <p>Learn-1-12</p>
            </div>
            <div className="box-button-sec">
              <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                <h2>Book a FREE coding class</h2>
              </a>
            </div>
          </div>
          <div className="card1">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/art_landing/desktop/art-course.png"
                className="card-img-top"
                alt="image"
              />
            </div>
            <h3>heeloo</h3>
            <div className="card1-link">
              <p>Learn-1-12</p>
            </div>
            <div className="box-button-sec">
              <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                <h2>Book a FREE coding class</h2>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="abc">
        <div className="box-button-sec2">
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            <h2>Book a FREE coding class</h2>
          </a>
        </div>

        <div className="blue-button">
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            <h2>Learn More</h2>
          </a>
        </div>
      </section>

      <div className="sec-four">
        <div className="four-head">
          <h1>Join 1 million+ students worldwide, certified by WhiteHat Jr</h1>
        </div>
        <div className="sec-four-main">
          <div className="fcard">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/christian-sheeder-1x.jpg"
                className="card-img-f"
                alt="image"
              />
            </div>
            <div className="f-ptag">
              <h3>Aeeloo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem asperiores.
              </p>
            </div>
          </div>
          <div className="fcard">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/dhruva-1x.png"
                className="card-img-f"
                alt="image"
              />
            </div>
            <div className="f-ptag">
              <h3>Aeeloo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem asperiores.
              </p>
            </div>
          </div>
          <div className="fcard">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/shridhar-1x.png
                "
                className="card-img-f"
                alt="image"
              />
            </div>
            <div className="f-ptag">
              <h3>Aeeloo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem asperiores.
              </p>
            </div>
          </div>
          <div className="fcard">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/anthony-watkins-1x.jpg"
                className="card-img-f"
                alt="image"
              />
            </div>
            <div className="f-ptag">
              <h3>Aeeloo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem asperiores.
              </p>
            </div>
          </div>
          <div className="fcard">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/skandini-1x.png
                "
                className="card-img-f"
                alt="image"
              />
            </div>
            <div className="f-ptag">
              <h3>Aeeloo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quidem asperiores.
              </p>
            </div>
          </div>
        </div>
        <div className="four-btn">
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            <h2>Book a FREE coding class</h2>
          </a>
        </div>
      </div>

      <div className="sec-five">
        <div className="five-title">
          <h1>Why coding for kids</h1>

          <div className="five-main">
            <div>
              <img src={pic2} alt="Image Container" className="cropped" />
            </div>
            <div></div>
            <div className="five-text">
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                molestiae assumenda illo atque quam voluptate. Commodi aliquid
                voluptatum libero nobis optio fugiat in corrupti facilis quo
                ipsa, et quasi iure. Lorem ipsum dolor sit amet consectetur,
                <br />
                adipisicing elit. Porro molestiae assumenda illo atque quam
                voluptate. Commodi aliquid voluptatum libero nobis optio fugiat
                <br />
                in corrupti facilis quo ipsa, et quasi iure. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Porro
                <br />
                in corrupti facilis quo ipsa, et quasi iure. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Porro sit amet
              </p>
              <div className="five-btn">
                <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
                  <h2>Book a FREE coding class</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="five-btm">
          <div></div>
          <div className="btm">
            <h1>Your Child Will Learn</h1>
            <br />
            <div className="midlogo">
              <div>
                <img
                  className="logo"
                  src="https://t4.ftcdn.net/jpg/01/58/29/29/360_F_158292937_Z6azf0Bp9ja0nSPn96nXDINpw0RNto1J.jpg"
                  alt=""
                />
                <br />
                <br />
                <h4>logic</h4>
              </div>
              <div>
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJALCfY2iv4DDdFcOe5OMC0Si2o5PsQjZHtgbHS4lr5MmsnVcv2cbYj9tq3w8LEXyOXA&usqp=CAU"
                  alt=""
                />
                <br />
                <br />
                <h5>Structure</h5>
              </div>
              <div>
                <img
                  className="logo"
                  src="https://png.pngtree.com/png-clipart/20200508/ourmid/pngtree-hand-drawn-cartoon-thinking-light-bulb-gradient-illustration-png-image_2199282.jpg"
                  alt=""
                />
                <br />
                <br />
                <h5>Creative Thinking</h5>
              </div>
              <div>
                <img
                  className="logo"
                  src="https://e7.pngegg.com/pngimages/359/251/png-clipart-innovation-problem-solving-design-thinking-others-purple-logo.png"
                  alt=""
                />
                <br />
                <br />
                <h5>sequencing</h5>
              </div>
              <div>
                <img
                  className="logo"
                  src="https://letstalkscience.ca/sites/default/files/2020-10/decomposition_.png"
                  alt=""
                />
                <br />
                <br />
                <h5>Algorithm Thinking</h5>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
      <br />
      <br />

      {/* slidebar */}

      <div className="slider">
        <Carousel fade className="editor">
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="editor1">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <section className="ten">
        <div className="twos">
          <img
            className="slide"
            src="https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/mae-1x.png"
            alt=""
          />
        </div>
        <div className="ones">
          <br />
          <br />
          <h2>
            Saira’s video, Age 9, <br />
            WhiteHat Jr Coder
          </h2>
          <br />
          <br />
          <br />
          <p>
            Watch how coding with WhiteHat Jr helped Saira get better at Math.
          </p>
          <br />
          <br />
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            {" "}
            <button type="button" className="btn btn-secondary btn-lg">
              Book A Free Trail
            </button>
          </a>
        </div>
      </section>
      <br />
      <br />
      <h1>5.5 Million Student Projects & Counting</h1>
      <section className="eleven">
        <div className="part">
          <div>
            <img
              className="fit"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png"
              alt=""
            />
          </div>
          <div>
            <h3>Advanced</h3>
            <br />

            <h1>Pat a Pet App</h1>
            <p>
              The app connects fellow pet lovers to take care of each other's
              pets.
            </p>

            <h3>shubham raj</h3>
          </div>
        </div>
        <div className="part">
          <div>
            <img
              className="fit"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png"
              alt=""
            />
          </div>
          <div>
            <h3>Professional</h3>
            <br />

            <h1>The Escape Game</h1>
            <p>
              An engaging strategy and survival game which is based on a
              dramatic army engagement in India..
            </p>

            <h3>shubham raj</h3>
          </div>
        </div>
        <div className="part">
          <div>
            <img
              className="fit"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png"
              alt=""
            />
          </div>
          <div>
            <h3>Begineer</h3>
            <br />

            <h1>Ambulance Whizz</h1>
            <p>
              An engaging strategy and survival game which is based on a
              dramatic army engagement in India.
            </p>

            <h3>Aaran ghost</h3>
          </div>
        </div>
        <div className="part">
          <div>
            <img
              className="fit"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png"
              alt=""
            />
          </div>
          <div>
            <h3>Intermediate</h3>
            <br />

            <h1>DYSXA App</h1>
            <p>
              The app helps children to learn letters, numbers and colors with a
              guided and engaging flow.
            </p>

            <h3>kandy singh</h3>
          </div>
        </div>
      </section>

      <section className="twelve">
        <div>
          {" "}
          <p>Want to learn how to create such awesome projects?</p>{" "}
        </div>
        <div>
          {" "}
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            {" "}
            <button type="button" className="btn btn-secondary btn-lg">
              Book A Free Trail
            </button>
          </a>
        </div>
      </section>
      <br />
      <br />
      <h1>
        <b>Our Expert Coding Educators</b>
      </h1>
      <section className="thirteen">
        <div>
          <img
            className="edit"
            src="https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-2x.png"
            alt=""
          />
        </div>
        <div>
          <h1>
            Top 1% teachers selected by an industry-leading 4-step teacher
            assessment process by top 1% of early childhood coding experts
          </h1>
          <br />
          <p>
            WhiteHat Jr follows a rigorous 4-Step Selection Process for
            confirming teacher candidates so your children are taught by the Top
            Early Childhood Coding Experts.
          </p>
          <br />
          <br />
          <a href="https://www.whitehatjr.com/live-teacher-dashboard">
            {" "}
            <button type="button" className="btn btn-secondary btn-lg">
              View Live Comment
            </button>
          </a>
          <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
            {" "}
            <button type="button" className="btn btn-secondary btn-lg">
              Book A Free Trail
            </button>
          </a>
        </div>
      </section>
      <section className="forteen">
        <div>
          <h5>World’s first of its kind learning pedagogy</h5>

          <h1>Private Batch vs Solo Class</h1>
          <img src={pic3} alt="Image Container" className="last" />
        </div>
      </section>
      <br />
      <br />
      <section className="fifteen">
        <button type="button" className="btn btn-secondary btn-lg">
          Private Batch
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Solo Class{" "}
        </button>
        <br />

        <button type="button" className="btn btn-secondary btn-lg">
          Coding Curriculum
        </button>
        <br />

        <button type="button" className="btn btn-secondary btn-lg">
          Begineer
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Intermediate
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Advanced
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Professional
        </button>
        <div className="distribute">
          <div className="start"></div>

          <div className="second">
            <h4>Introduction to Coding</h4> <br />
            <p>8 classes</p>
            <br />
            <h4>Curriculum Includes</h4> <br />
            <p>Sequence, Fundamentals Coding Blocks, Loops</p> <br />
            <p>View Detailed curriculum</p>
            <br /> <br />
            <h3>₹ 9,599</h3> <br />
            <a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124">
              <button type="button" className="btn btn-secondary btn-lg">
                Buy Now
              </button>
            </a>
          </div>
          <div className="second">
            <h4>App Developer Certificate</h4> <br />
            <p>48 classes</p>
            <br />
            <h4>Curriculum Includes</h4> <br />
            <p>Introduction to Coding</p> <br />
            <p>
              Events / UI,Conditionals, Complex Loop,
              <br /> Logic Structures, Turtle Coding
            </p>
            <br />
            <p>view detailed curriculum</p> <br /> <br />
            <h3>₹ 49,999</h3> <br />
            <a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124">
              <button type="button" className="btn btn-secondary btn-lg">
                Buy Now
              </button>
            </a>
          </div>
          <div className="second">
            <h4>Artificial Intelligence & Code a Satellite</h4> <br />
            <p>144 classes</p>
            <br />
            <h4>Curriculum Includes</h4> <br />
            <p>Introduction to Coding App Developer Certificate</p> <br />
            <p>
              Extended UI/UX, Rich GUI app, Space Tech simulation Arrays,
              Databases, APIs, Code satellite sensors.
            </p>{" "}
            <br />
            <p>View Detailed curriculum</p>
            <br /> <br />
            <h3>₹ 135,999</h3> <br />
            <a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124">
              <button type="button" className="btn btn-secondary btn-lg">
                Buy Now
              </button>
            </a>
          </div>

          <div className="start"></div>
        </div>
      </section>
      <section className="sixteen">
        <a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website">
          <button type="button" className="btn btn-secondary btn-lg">
            Book A Free Trail
          </button>
        </a>
      </section>

      <section className="eighteen">
        <h1>
          <b>Meet our IIT and IB-trained Curriculum Creators</b>
        </h1>
        <div className="jkl">
          <div></div>
          <div>
            <img
              className="lkj"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/farida.png"
              alt=""
            />
            <h6>Dr. Farida Khan</h6> <br />
            <p>PHD IITB, Gold Medalist</p>
          </div>
          <div>
            {" "}
            <img
              className="lkj"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/rajeev.png"
              alt=""
            />
            <h6>Rajeev Jha</h6> <br />
            <p>Advanced Game Designer, TFI Fellow.</p>
          </div>
          <div>
            {" "}
            <img
              className="lkj"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/abhijit.png"
              alt=""
            />
            <h6>Abhijeet Gawande</h6> <br />
            <p>IB Educational Technologist, AI Expert</p>
          </div>
          <div>
            {" "}
            <img
              className="lkj"
              src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/gauri.png"
              alt=""
            />
            <h6>Gauri Parulkar</h6> <br />
            <p>Computer Scientist, Entrepreneur, Science Quotient</p>
          </div>
          <div></div>
        </div>
      </section>
      <br />
      <br />

      <section className="nineteen">
        <h2 className="hit">
          {" "}
          <b>
            Create With Math helps your child build
            <br /> remarkable things and become future ready!
          </b>{" "}
        </h2>
        <a href="https://www.whitehatjr.com/live-teacher-dashboard">
          {" "}
          <button type="button" className="btn btn-secondary btn-lg">
            View Live Comment
          </button>
        </a>
        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website">
          {" "}
          <button type="button" className="btn btn-secondary btn-lg">
            Book A Free trial
          </button>
        </a>
      </section>
      <br />
      <br />

      <section className="twenty">
        <h1>
          <b>Join the WhiteHat Jr Revolution</b>
        </h1>
        <img src={pic5} alt="Image Container" className="last2" />
      </section>
      <br />
      <br />
      <section className="twentyone">
        <h1>
          <b>WhiteHat Jr has been Featured In</b>
        </h1>
        <br />
        <a href="https://www.business-standard.com/article/pti-stories/whitehat-jr-aims-to-teach-indian-school-goers-coding-119041601283_1.html">
          <img
            className="ton"
            src="https://pbs.twimg.com/media/EWhIIFVXsAAYwL6.png"
            alt=""
          />
        </a>
        <a href="https://techcrunch.com/2020/08/05/indias-byjus-acquires-whitehat-jr-for-300-million/">
          <img
            className="ton"
            src="https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.png"
            alt=""
          />
        </a>
        <a href="https://yourstory.com/2020/06/edtech-startup-whitehat-jr-kids-ai-coding-skills">
          <img
            className="ton"
            src="https://en-media.thebetterindia.com/uploads/2019/04/yourstory-logo-e1556169971152.png?compress=true&quality=80&w=360&dpr=2.6"
            alt=""
          />
        </a>
        <a href="https://www.cnbctv18.com/business/ed-tech-start-up-whitehat-jr-to-rope-in-2000-online-teachers-on-its-learning-platform-6136181.htm">
          <img
            className="ton"
            src="https://www.adgully.com/img/800/201907/cnbc-tv18.jpg"
            alt=""
          />
        </a>
      </section>
      <div className="endFoot">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
