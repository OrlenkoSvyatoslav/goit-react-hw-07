import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectValueFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectValueFilter);

  return (
    <>
      <h2>Find contacts...</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
};

export default SearchBox;
