import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

export const SliderWork = () => {
  let settings = {
    // dots: true,
    // focusOnSelect: true,
    onSwipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "red",
          // borderRadius: "10px",
          width: "400px",
          paddingTop: "2px",
          marginLeft: "2rem",
          // height: '2rem',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <Carousel {...settings}>
      <div className="slider-one">
        <p style={{ fontSize: "48px" }}>
          {" "}
          one <br />
          {/* <span style={{fontWeight: 'bold'}}>
                Perfect Results!
              </span> */}
        </p>
      </div>
      <div className="slider-two">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Two <br />
          {/* <span style={{fontWeight: 'bold'}}>
                     Great Solution
          </span> */}
        </p>
      </div>
      <div className="slider-three">
        <p style={{ fontSize: "48px" }}>
          Three
          <br />
          {/* <span style={{fontWeight: 'bold'}}>
                       Your Business
                    </span> */}
        </p>
      </div>
      <div className="slider-one">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Four <br />
          {/* <span style={{fontWeight: 'bold'}}>
                Perfect Results!
              </span> */}
        </p>
      </div>
      <div className="slider-two">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Five <br />
          {/* <span style={{fontWeight: 'bold'}}>
                     Great Solution
          </span> */}
        </p>
      </div>
      <div className="slider-three">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Six <br />
          {/* <span style={{fontWeight: 'bold'}}>
                       Your Business
                    </span> */}
        </p>
      </div>
      <div className="slider-one">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Seven <br />
          {/* <span style={{fontWeight: 'bold'}}>
                Perfect Results!
              </span> */}
        </p>
      </div>
      <div className="slider-two">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Eight <br />
          {/* <span style={{fontWeight: 'bold'}}>
                     Great Solution
          </span> */}
        </p>
      </div>
      <div className="slider-three">
        <p style={{ fontSize: "48px" }}>
          {" "}
          Nine <br />
          {/* <span style={{fontWeight: 'bold'}}>
                       Your Business
                    </span> */}
        </p>
      </div>
    </Carousel>
  );
};

export const Carousel = styled(Slider)`
  /* background-image: url */
  /* margin: 0 3rem; */
  /* max-width: 700px;
   */

  /* .slick-list {
      overflow: visible;
  } */

  width: 100%;

  margin-top: 10vh;
  /* margin-left: 5rem; */
  /* color: white; */
  .slider-one {
   
    height: 50vh;
    border: 3px solid red;
  }

  .slider-two {
    height: 50vh;
    
    /* background-image: linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider2.png); */
    border: 3px solid blue;
  }
  .slider-three {
    height: 50vh;
    border: 3px solid brown;
    /* background-image:linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider3.png); */
  }
`;
