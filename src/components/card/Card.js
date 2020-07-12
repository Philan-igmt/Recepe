import React from "react";
import "./Card.css";
import "materialize-css/dist/css/materialize.min.css";

function Card({ title, image, ingredients }) {
  return (
    <div className="everything">
      <div className="card">
        <div className="card-image">
          <img src={image} />
          <span className="card-title">{title}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">favorite </i>
          </a>
        </div>
        <div className="card-content">
          <p>{ingredients}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
