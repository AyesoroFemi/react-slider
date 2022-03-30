import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderWork } from './SliderWork'
import './App.css';



function App() {

  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
   <Container>
      <Carousel {...settings}>
     
        <div className="slider-one">
            <p style={{fontSize: '48px'}}>Innovative ways <br />
                <span style={{fontWeight: 'bold'}}>
                  Perfect Results!
                </span>
            </p>
        </div>
        <div className="slider-two">
            <p style={{fontSize: '48px'}}>Everything starts with a <br />
                    <span style={{fontWeight: 'bold'}}>
                      Great Solution
            </span>
            </p>
        </div>
        <div className="slider-three">
            <p style={{fontSize: '48px'}}> The best IT Company for<br />
                      <span style={{fontWeight: 'bold'}}>
                        Your Business
                      </span>
              </p>
        </div>
     
    </Carousel> 

    <SliderWork />
  </Container>
  );
}

export default App;


export const Container = styled.div`
  border: 3px solid orange;
  overflow-x: hidden;
`

export const Carousel = styled(Slider)`

  /* background-image: url */
  /* margin: 0 3rem; */
  /* max-width: 700px;
   */

  /* width: 100%;
  overflow: none; */

  button {
    border: 3px solid red;
    z-index: 1;
  }



  color: white;
   .slider-one {
      height: 100%;
      width: 100%;
      /* border: 10px solid transparent; */
      height: 50vh;
      background-image:linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider.png);
      /* opacity: 0.5; */
      color: white;
   }

   .slider-two {
      height: 50vh;
      background-image: linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider2.png);
   }
   .slider-three {
      height: 50vh;
      background-image:linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider3.png);
   }


`