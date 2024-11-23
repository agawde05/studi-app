import { Link } from "@remix-run/react";

interface CardProps {
  name?: string;
  location?: string;
  backgroundImage?: string;
  rating?: string;
  notes?: string;
  timeAgo?: string;
}

export default function Card({
  name,
  location,
  backgroundImage,
  rating,
  notes,
  timeAgo,
}: CardProps) {
  return (
    <div className="card transition-transform duration-300 ease-in-out hover:scale-105">
      <header className="header">
        <div className="title-container">
          <h2 className="title w-3/4">
            <strong className="name">{name}</strong>
            <span className="ranked"> ranked </span>
            <strong className="rank">{location}</strong>
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
