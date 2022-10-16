import React from "react";
import location from "../assets/location.svg";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img className="card--image" src={props.imageUrl} alt={props.title} />
        <div className="card--description">
          <div className="title">
            <img src={location} alt="location-icon" />
            <p className="country--name">{props.location}</p>
            <a className="google--link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h3 className="destination--name">{props.title}</h3>
          <p className="card--date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="card--desc">{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
