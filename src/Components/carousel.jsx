import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Conference from "../assets/eventpic/e-gov.jpg";
import G20 from "../assets/eventpic/gov.jpg";
import e_Gov from "../assets/eventpic/e-governance.png";
import pillars9 from "../assets/eventpic/e-Governance_3.jpg";
import Event01 from "../assets/eventpic/event01.jpg";
import thumb from "../assets/eventpic/thumb.jpg";
import Machinelearning from "../assets/eventpic/pageHeaderLogoImage.png";

class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showStatus={false}
          style={{objectFit:'contain'}}
        >
          <div>
            <img src={Conference} height="350px" />
          </div>

          <div>
            <img src={G20} height="350px" />
          </div>
          <div>
            <img src={e_Gov} height="350px" />
          </div>
          <div>
            <img src={pillars9} height="350px" />
          </div>
          <div>
            <img src={Event01} height="350px" />
          </div>

          <div>
            <img src={thumb} height="350px" />
          </div>
          <div>
            <img src={Machinelearning} height="350px" />
          </div>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Scrolling;

// ////////////////////

// import React, { useState } from "react";
// import "./App.css";

// const images = [
//   {
//     src: "C:\E-Governance\university_event\src\assets\cdac.jpg",
//     alt: "Image 1",
//   },
//   {
//     src: "C:\E-Governance\university_event\src\assets\cdac.jpg",
//     alt: "Image 2",
//   },
//   {
//     src: "C:\E-Governance\university_event\src\assets\cdac.jpg",
//     alt: "Image 3",
//   },
// ];

// function carousel() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-container">
//         <img
//           src={images[currentImageIndex].src}
//           alt={images[currentImageIndex].alt}
//           className="carousel-image"
//         />
//       </div>
//       <button className="carousel-button prev" onClick={prevImage}>
//         &lt;
//       </button>
//       <button className="carousel-button next" onClick={nextImage}>
//         &gt;
//       </button>
//     </div>
//   );
// }

// export default carousel;

/////////////////////////////////////////////////////////
