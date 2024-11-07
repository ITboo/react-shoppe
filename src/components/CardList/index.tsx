import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

import "./CardList.css";

const CardList = () => {
  const { isPending, isSuccess, error, data } = useQuery<any>({
    queryKey: ["products"],
    queryFn: () => {
      const data = fetch("items.json").then( (res) =>res.json());
      return data;
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error || !data) return "An error has occurred";
  return (
    <>
      <div className="list">
        {isSuccess &&
          data.map((item) => (
            <Card img={item.img} title={item.title} price={item.price} />
          ))}
      </div>
    </>
  );
};

export default CardList;
