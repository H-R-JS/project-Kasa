import React from "react";

export const Tags = ({ tags }) => {
  return (
    <div className="house-tag-container">
      {tags.map((item, index) => {
        return (
          <span key={index} className="house-tag">
            {item}
          </span>
        );
      })}
    </div>
  );
};
