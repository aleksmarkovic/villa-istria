import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65148.59980886833!2d13.591983241000804!3d45.28662640249201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c8f9ae8b58f92f5!2zNDXCsDE3JzM2LjIiTiAxM8KwMzYnNDUuMSJF!5e1!3m2!1shr!2shr!4v1650135408710!5m2!1shr!2shr"
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}

export default Map;
