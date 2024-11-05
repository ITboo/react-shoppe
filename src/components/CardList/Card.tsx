import React from "react";
import "./CardList.css";
import { ShoppingCart } from "lucide-react";

interface CardProps {
  img: string;
  title: string;
  price: number;
}
const Card = (props: CardProps) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAdd = () => setIsAdded(!isAdded);

  return (
    <div className="list__item">
      <img src={props.img} alt={props.title} />
      <div className="list__item-info">
        <div className="info__description">
          <span>{props.title}</span>
          <span className="price">$ {props.price}.00</span>
        </div>
        <button
          className={isAdded ? "addedToCart" : "notAddedToCart"}
          onClick={handleAdd}
        >
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Card;
