import "./Card.css";
import pin from "../../../assets/pin.svg";

export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="card">
      <img
        className="card--img"
        src={imageUrl}
        alt={`Scenic photo of ${location}`}
      />
      <div className="card--details">
        <div className="card--location">
          <img src={pin} alt="pin icon" />
          <p>{location}</p>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{title}</h2>
        <p className="card--dates">
          {startDate}-{endDate}
        </p>
        <p className="card--description">{description}</p>
      </div>
    </div>
  );
}
