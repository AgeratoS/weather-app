import React from "react";
import { SearchProps } from "./interface";
import { SearchInput } from "./SearchInput";

const Search: React.FC<SearchProps> = ({ value, onChange }) => <SearchInput value={value} onChange={onChange} />

export default Search;