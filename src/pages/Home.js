import React, { useState } from "react";
import { useGlobalContext } from "../context_AppProvider";
import BookList from "../components/BookList";

const categories = [
  { label: "📖 Harry Potter", query: "harry potter" },
  { label: "🧙‍♂️ The Lord of the Rings", query: "lord of the rings" },
  { label: "🦕 Jurassic Park", query: "jurassic park" },
  { label: "🕵️‍♀️ Sherlock Holmes", query: "sherlock holmes" },
];

const Home = () => {
  const { setSearchTerm } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (query, index) => {
    setSearchTerm(query);
    setActiveIndex(index);
  };

  return (
    <div className="home text-center">
      <h1>Welcome to Book Explorer 📚</h1>
      <p>Find your next read by clicking a category below.</p>
      <h3>Popular Searches:</h3>

      <div className="popular-searches">
        {categories.map(({ label, query }, index) => (
          <div
            key={index}
            className={`popular-box ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(query, index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === "Enter") handleClick(query, index)}}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Show BookList below the boxes */}
      <BookList />
    </div>
  );
};

export default Home;
