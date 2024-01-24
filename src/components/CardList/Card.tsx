import "./CardList.css";

interface CardProps {
  img: string;
  title: string;
  price: number;
}
const Card = (props: CardProps)=> {
  return (
    <div className="list__item">
      <img src={props.img} alt={props.title} />
      <span>{props.title}</span>
      <span>$ {props.price}.00</span>
    </div>
  );
};

export default Card;
