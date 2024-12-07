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
        <div className="study-spots flex">
          <img className="h-min" src="couch.svg" />
          {/* make resize height correct */}
          <h1>study spots</h1>
          {/* TODO make shadow right */}
        </div>
        <h1 className="hero-text">on campus.</h1>
        <h1 className="filler-text my-4">
          Use Studi to explore, rank, and review top study spaces on the
          University of Michigan campus. Whether you're looking for a quiet
          corner or a collaborative space, find your perfect spot here.
        </h1>
        <div className="rounded-box">
          <span className="post-now">Log in</span>
        </div>
      </div>
    </div>
  );
}
