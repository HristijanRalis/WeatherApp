import { useState } from "react";

type searchBarProps = {
  onSearch: (city: string) => void;
};

export const Searchbar = ({ onSearch }: searchBarProps) => {
  const [cityName, setCityName] = useState("");
  return (
    <div className="InputContainer">
      <input
        type="text"
        placeholder="Search City ..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <button onClick={() => onSearch(cityName)} className="searchBtn">
        Search
      </button>
    </div>
  );
};
