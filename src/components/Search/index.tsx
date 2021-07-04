import { SearchProps } from "./interface";
import styles from "./Search.module.css";

const Search: React.FC<SearchProps> = ({ value, onChange }) => (
  <div className={styles.Search} data-testid="SearchInput">
    <input value={value} onChange={onChange} className={styles.Search__input}/>
  </div>
)

export default Search;