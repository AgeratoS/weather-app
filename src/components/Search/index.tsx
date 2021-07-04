import React from "react";
import { SearchProps } from "./interface";
import { SearchInput } from "./SearchInput";

const Search: React.FC<SearchProps> = ({ value, onChange }) => (
  <div>
    <SearchInput value={value} onChange={onChange} />
  </div>
)

export default Search;