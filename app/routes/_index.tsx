// app/routes/index.tsx
import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Studi - Home" },
    { name: "description", content: "Value through Innovation" },
  ];
};

export default function Index() {
  return (
    <div className={"landing-page"}>
      {/* first section */}
      <div className="hero-container">
        <h1 className="hero-text">Finding the best</h1>
        <h1 className="study-spots">study spots</h1>
        <h1 className="hero-text">on campus.</h1>
        <h1 className="filler-text my-4">
          Use Studi to explore, rank, and review top study spaces on the
          University of Michigan campus. Whether you’re looking for a quiet
          corner or a collaborative space, find your perfect spot here.
        </h1>
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
          <Card
            name={"Mia"}
            location={"Michigan Union"}
            rank={"9.1"}
            backgroundImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Michigan_Union_2009.JPG/1200px-Michigan_Union_2009.JPG"
            }
            rating={"9.1"}
            notes={
              "Good lighting, had a lot of free tables, could lock in, adding some text"
            }
            timeAgo={"6 hours ago"}
          ></Card>
          <Card
            name={"Mia"}
            location={"Michigan Union"}
            rank={"9.1"}
            backgroundImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Michigan_Union_2009.JPG/1200px-Michigan_Union_2009.JPG"
            }
            rating={"9.1"}
            notes={
              "Good lighting, had a lot of free tables, could lock in, adding some text"
            }
            timeAgo={"6 hours ago"}
          ></Card>
          <Card
            name={"Mia"}
            location={"Michigan Union"}
            rank={"9.1"}
            backgroundImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Michigan_Union_2009.JPG/1200px-Michigan_Union_2009.JPG"
            }
            rating={"9.1"}
            notes={
              "Good lighting, had a lot of free tables, could lock in, adding some text"
            }
            timeAgo={"6 hours ago"}
          ></Card>
          <Card
            name={"Mia"}
            location={"Michigan Union"}
            rank={"9.1"}
            backgroundImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Michigan_Union_2009.JPG/1200px-Michigan_Union_2009.JPG"
            }
            rating={"9.1"}
            notes={
              "Good lighting, had a lot of free tables, could lock in, adding some text"
            }
            timeAgo={"6 hours ago"}
          ></Card>
          <Card
            name={"Mia"}
            location={"Michigan Union"}
            rank={"9.1"}
            backgroundImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Michigan_Union_2009.JPG/1200px-Michigan_Union_2009.JPG"
            }
            rating={"9.1"}
            notes={
              "Good lighting, had a lot of free tables, could lock in, adding some text"
            }
            timeAgo={"6 hours ago"}
          ></Card>
        </div>
      </div>
    </div>
  );
}
