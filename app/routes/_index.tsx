// app/routes/index.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Studi - Home" },
    { name: "description", content: "Value through Innovation" },
  ];
};

export default function Index() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-6xl font-semibold mb-8 max-w-[75%]">Studi App</h1>
        <div className="text-xl leading-relaxed text-gray-300 font-serif">
          <p className="mb-6">
            Blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah
          </p>
        </div>
      </div>
    </div>
  );
}
