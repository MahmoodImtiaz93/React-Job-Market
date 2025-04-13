import React from "react";

const Card = ({ cardColor = "bg-gray-100", children }) => {
  return (
    <div className={`${cardColor} p-6 rounded-lg shadow-md`}>{children}</div>
  );
};

export default Card;
