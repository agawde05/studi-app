import { Link } from "@remix-run/react";

interface CardProps {
  name?: string;
  location?: string;
  rank?: string;
  backgroundImage?: string;
  rating?: string;
  notes?: string;
  timeAgo?: string;
}

export default function Card({
  name,
  location,
  rank,
  backgroundImage,
  rating,
  notes,
  timeAgo,
}: CardProps) {
  return (
    <div className="card">
      <header className="header">
        <div className="title-container">
          <h2 className="title">
            <strong className="name">{name}</strong>
            <span className="ranked"> ranked </span>
            <strong className="rank">{rank}</strong>
          </h2>
          <div className="rating-container">
            <output className="rating" aria-label="Rating">
              {rating}
            </output>
          </div>
        </div>
        <address className="location-info">
          <p className="location">{location}</p>
        </address>
      </header>
      {backgroundImage && (
        <div className="image-container">
          <img
            src={backgroundImage}
            alt={`${name || "Location"} image`}
            className="background-image"
          />
        </div>
      )}
      <footer className="footer">
        <section className="notes">
          <span className="label">Notes:</span>
          <span className="text"> {notes}</span>
        </section>
        <time className="time" dateTime={timeAgo}>
          {timeAgo}
        </time>
      </footer>
    </div>
  );
}
