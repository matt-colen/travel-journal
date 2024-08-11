import Card from "./Card/Card.jsx";
import cardData from "../../data.js";
import "./Main.css";

export default function Main() {
  const cards = cardData.map((item) => <Card key={`${item.id}`} {...item} />);
  return <main className="main">{cards}</main>;
}
