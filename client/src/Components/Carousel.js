import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';

import './Style.css';




import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import image5 from "../images/5.png"
import image6 from "../images/6.png"

const items = [
  {
    
    src: image1,
    altText: 'Slide 1',
    
  },
  {
    src: image2,
    altText: 'Slide 2',
    
  },
  {
    src: image3,
    altText: 'Slide 3',
  },
  {
    
    src: image4,
    altText: 'Slide 1',
    
  },
  {
    src: image5,
    altText: 'Slide 2',
    
  },
  {
    src: image6,
    altText: 'Slide 3',
  }
];


const CarouselPage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <div>
        <img src={item.src} 
        className="d-block w-100"
        alt={item.altText} />
        
      </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      
      </CarouselItem>
      
    );
  });

  return (
    <Container className="themed-container carousel" fluid={true}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </Container>
  );
}




export default CarouselPage;