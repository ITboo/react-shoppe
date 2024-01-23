import product from "../../data/items.json";
import './CardList.css'
const CardList = () => {
  return (
    <>
    <span className="list__title">Shop The Latest</span>
    <div className="list">
      {product.map((item) => (
        <div className="list__item">
          <img src={item.img} alt={item.title} />
          <span>{item.title}</span>
          <span>$ {item.price}.00</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default CardList;
