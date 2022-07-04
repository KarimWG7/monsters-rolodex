import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeHodler, className } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeHodler}
//         onChange={onChangeHandler}
//       ></input>
//     );
//   }
// }
const SearchBox = (props) => {
  const { onChangeHandler, placeHodler, className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHodler}
      onChange={onChangeHandler}
    ></input>
  );
};
export default SearchBox;
