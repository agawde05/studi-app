import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Studi - Home" },
    { name: "description", content: "Value through Innovation" },
  ];
};

// Constant array with all card data
const cardData = [
  {
    name: "Mia",
    location: "Hatcher Graduate Library",
    backgroundImage:
      "https://lib.umich.edu/static/db8149c1851a919702b5eeda601def8e/8e6f1/hatcher-5-june2019_edited.jpg",
    rating: "9.5",
    notes:
      "Spacious seating with quiet zones perfect for deep focus. Amazing natural lighting throughout.",
    timeAgo: "2 hours ago",
  },
  {
    name: "Chrissi",
    location: "Law Library",
    backgroundImage:
      "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/11/online_kit.STKLawQuad.11.30.21001.jpg?fit=2400%2C1602&ssl=1",
    rating: "8.8",
    notes:
      "Stunning architecture and a peaceful atmosphere. Great for solo work but lacks group study areas.",
    timeAgo: "6 hours ago",
  },
  {
    name: "Sydney",
    location: "Ross School of Business",
    backgroundImage:
      "https://img.nmcdn.io/e1/w:1600,h:866,v:1/kpfwp/wp-content/uploads/imported-files/Michigan-Ross-School-of-Business_H.jpg?s=02c4d2e9",
    rating: "8.9",
    notes:
      "Modern design with lots of amenities. Best for short study sessions due to frequent crowds.",
    timeAgo: "1 day ago",
  },
  {
    name: "Atharva",
    location: "Pierpont Commons",
    backgroundImage:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/annarbor/PierpontCommons16-031-sm-78b9a7915056a36_78b9a901-5056-a36a-064b5bfd7784ae27.jpg",
    rating: "8.3",
    notes:
      "Convenient for grabbing a quick snack while studying. Noise levels can vary during lunchtime.",
    timeAgo: "3 hours ago",
  },
  {
    name: "Mia",
    location: "Duderstadt Center",
    backgroundImage:
      "https://www.dc.umich.edu/wp-content/uploads/sites/487/2020/10/DCexterior2020jmerlinwFXH12099.jpeg",
    rating: "9.2",
    notes:
      "Excellent for group work and creative projects. State-of-the-art tech and ample seating available.",
    timeAgo: "2 days ago",
  },
  {
    name: "Anoushka",
    location: "Kinesiology Building",
    backgroundImage:
      "https://2021.annualreport.umich.edu/uploads/school-of-kinesiology-building-skylight-atrium.jpeg",
    rating: "9.0",
    notes:
      "Modern facilities with comfortable study areas. Ideal for focused sessions or collaborative projects.",
    timeAgo: "4 hours ago",
  },
];

export default function Index() {
  return (
    <div className={"landing-page"}>
      {/* first section */}
      <div className="hero-container">
        <h1 className="hero-text">Trending Study Spots</h1>

        <div className="rounded-box">
          <span className="post-now">Post now</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-4">
        <form className="search-form mb-6">
          <input
            type="text"
            className="search-input"
            placeholder="Search Studi Spots"
            aria-label="Search Studi Spots"
          />
        </form>
        <div className="feed">
          {cardData.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              location={card.location}
              backgroundImage={card.backgroundImage}
              rating={card.rating}
              notes={card.notes}
              timeAgo={card.timeAgo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
