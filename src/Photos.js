import React from "react";

export default function Photos(props) {
  if (props.photos)
    return (
      <div className="me-3">
        <div className="row mt-4">
          {props.photos.map(function (photo, index) {
            console.log(`link is` + photo.src.original);
            return (
              <div className="col-4 mb-3">
                <a href={photo.src.landscape} target="a_blank" rel="noreferer">
                  <img
                    alt={photo.alt}
                    src={photo.src.tiny}
                    key={index}
                    className="img-fluid rounded"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
}
