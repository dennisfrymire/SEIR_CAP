import React, { Component } from 'react';
import CarouselPage from "./Carousel";
import NavBarItem from "./NavBar";

class Index extends React.Component {
  render() {
  return (
    <div className="App">
      <NavBarItem />
      <CarouselPage/>

    </div>
  );
}
}

export default Index;