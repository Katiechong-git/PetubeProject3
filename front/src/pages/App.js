import React from "react";
import "./App.css";
import "./style/carousel.css";

// import Jumbo from "./Jumbotron.js";

import NavigationBar from "./NavigationBar.js";

import axios from "axios";
// import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
// import SwiperImage from "./SwiperImage.js";

// When I use axe on the website, it shows there are not enough color contrast between text and your background
// I think its because your background is mostly images, so its hard for axe to recognize its background color
// maybe you can consider changing a background color in your css file?
// In addtion, make sure that for every page you have a main landmark and level 1 heading for more accessibility 
// Make sure that all the page contents are contained by landmarks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
    };
  }

  componentDidMount() {
    axios.get("/videos/list", {}).then((response) => {
      this.setState({
        videoList: response.data, //后端叫resul t，前端叫response.data
      });
    });
  }

  render() {
    const links = this.state.videoList.map((value, index) => {
      return (
        <div className="video-item" key={index} style={{ textAlign: "center" }}>
          <div className="video-inner">
            <div className="video-title">
              <h3 style={{ textAlign: "center" }}>
                <span className="span_color">
                  <a href={"/videos/" + value.id} style={{ color: "black" }}>
                    {value.name} (Click to add your comments!)
                  </a>
                </span>
              </h3>
            </div>
            <iframe
              width="490"
              height="300"
              src={value.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    });
    return (
      <div>
        <NavigationBar />
        {/* <Jumbo /> */}

        {/* <SwiperImage /> */}

        <Carousel>
          <Carousel.Item>
            <div
              className="bg-item-slide"
              // style={{backgroundImage: "url(https://www.ingridkuhn.com/themes/unitedpets/img/slider/slide3.jpg)"}}
              style={{ backgroundImage: "url(/images/slide3.jpg)" }}
            ></div>
            <Carousel.Caption>
              <h3>Are you obsessed with cat videos?</h3>
              <p>Watch selected cat videos from Pettube.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="bg-item-slide"
              // style={{backgroundImage: "url(https://www.ingridkuhn.com/themes/unitedpets/img/slider/slide1.jpg)"}}
              style={{ backgroundImage: "url(/images/slide2.jpg)" }}
            ></div>
            <Carousel.Caption>
              <h3>Are you obsessed with Panda videos?</h3>
              <p>Watch selected panda videos from Pettube.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="bg-item-slide"
              // style={{backgroundImage: "url(https://www.ingridkuhn.com/themes/woof!/img/slide1.jpg)"}}
              style={{ backgroundImage: "url(/images/slide1.jpg)" }}
            ></div>
            <Carousel.Caption>
              <h3>Are you obsessed with dog videos?</h3>
              <p>Watch selected panda videos from Pettube.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="videos-wrapper">
          <div className="videos-list">{links}</div>
        </div>
      </div>
    );
  }
}

export default App;
