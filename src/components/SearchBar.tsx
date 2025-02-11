import { FormEvent } from "react";
import "./SearchBar.scss";
type SearchBarProps = {
  id: string;
};
const SearchBar = ({ id }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Förhindrar att sidan laddas om vid submit
    console.log(`Sökning från ${id}:`);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="searchBar">
        <select name="" id="">
          <option value="hej">hej</option>
          <option value="då">då</option>
        </select>
        <input type="text" placeholder="serach" />

        <button>search</button>
      </form>
    </>
  );
};
export default SearchBar;
