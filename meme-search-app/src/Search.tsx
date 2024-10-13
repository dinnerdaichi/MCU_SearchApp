import React, { useState } from "react";

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

    <div>
      <input type="text"
      placeholder="Search"
      value={inputValue}
      onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}


export default Search