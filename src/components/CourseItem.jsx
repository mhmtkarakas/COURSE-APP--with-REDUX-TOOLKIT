import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const CourseItem = ({ id, title, price, img, quantity }) => {
  return (
    <div className="cartItem">
      <img src={img} />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button className="cartQuantityButton">
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button className="cartQuantityButton">
            <BsChevronDown />
          </button>
        </div>
        <button className="cartDeleteButton">Sil</button>
      </div>
    </div>
  );
};

export default CourseItem;
