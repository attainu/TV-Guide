import React, { Component } from "react";
import PopularShows from "../components/PopularShows";
import './../css/ShowSlider.css'
import '@fortawesome/fontawesome-free/css/all.css'
import sliceText from "../functions/sliceText";

const ShowSlider = (...props) => {
  //console.log(this.props.movieDetail);
  //console.log(props);

  return (
    <PopularShows
      render={({
        results }
      ) =>
        <>
          <Carousel slides={results.slice(0, 6)} />

        </>
      }
    />
  );
};
export default ShowSlider;


// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <div
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" style={{ color: "white", mixBlendMode: "difference" }} />

      </div>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends Component {
  render() {
    return (
      <div
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" style={{ color: "white", mixBlendMode: "difference" }} />
      </div>
    );
  }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <div
          className={
            this.props.index === this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <div className="carousel__slide--backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.slide.backdrop_path})` }}>
          <div className="carousel__slide--details">
            <div className="carousel__slide--poster_path" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.slide.poster_path})` }}>

            </div>
          </div>
          <div className="carousel__slide--details">
            <div className="carousel_slide--original_name">
              <h3 style={{ textAlign: "left" }}>{this.props.slide.original_name}</h3>
              <p>{sliceText(this.props.slide.overview, 150)}</p>
            </div>

          </div>
        </div>
      </li>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-container">

          <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul>

          <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

          <ul className="carousel__indicators">
            {this.props.slides.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                onClick={e => this.goToSlide(index)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

// Render Carousel component
//render(<Carousel slides={carouselSlidesData} />, carouselContainer)