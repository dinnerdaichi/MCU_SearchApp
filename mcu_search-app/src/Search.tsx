import React, { useState } from "react";
import { Button } from "@mui/material";

interface SearchProps {
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}



const Search: React.FC<SearchProps> = ({ setSearchTerm, onSearch }) => {

  const [inputValue, setInputValue] = useState<string>('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setInputValue(event.target.value);
     setSearchTerm(event.target.value); // 検索ワードを更新
   };

  const handleSearch = () => {
    onSearch();
  };

  return (

    <div className="search__input">
      <input type="text"
      placeholder="find ur fav"
      value={inputValue}
      onChange={handleChange}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </div>
  )
}


export default Search