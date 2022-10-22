import React from "react";

export default function Photos(props) {
  if (props.photos)
    return (
      <div>
        {props.photos.map(function (photo, index) {
          console.log(`link is` + photo.src.original);
          return (
            <img
              alt={photo.alt}
              src={photo.src.small}
              key={index}
              className="img-fluid"
            ></img>
          );
        })}
      </div>
    );
}
