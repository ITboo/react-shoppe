import product from "../../data/items.json";
import Card from "./Card";

import "./CardList.css";

const CardList = () => {
  return (
    <>
      <span className="list__title">Shop The Latest</span>
      <div className="list">
        {product.map((item) => (
          <Card img={item.img} title={item.title} price={item.price} />
        ))}
      </div>
    </>
  );
};

export default CardList;
