import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "reactstrap";
import carousel from "./Carousel.module.css";

// Reactstrap carousel requires image array
// 3 props two required
// Src and alt text
// Don't forget key with array list of items in react (so img src)
let images = [];

class SimpleAutoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  // Required prop and gets the animated started
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = images.map(image => {
      return (
        <CarouselItem className={carousel.slide} key={image.src}>
          <img src={image.src} alt={image.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        pause={false}
        ride="carousel"
        interval={3000}
        className="d-none d-sm-block"
      >
        {slides}
        <CarouselCaption className="display-1" captionText="Welcome!" />
      </Carousel>
    );
  }
}
