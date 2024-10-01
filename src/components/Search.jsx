import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center py-2 max-sm:mx-3"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="border-2 border-gray-300 rounded-l-lg p-2 w-1/2 outline-none max-sm:w-full"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white p-2 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
