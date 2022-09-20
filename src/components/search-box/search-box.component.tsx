import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className: string;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
