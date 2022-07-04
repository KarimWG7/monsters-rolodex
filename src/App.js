import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchFeild, setSearchFeild] = useState(""); // => [value, setV alue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((mon) =>
      mon.name.toLowerCase().includes(searchFeild)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters,searchFeild]);

  const onSearchChange = (search) => {
    const searchFeildString = search.target.value.toLowerCase();
    setSearchFeild(searchFeildString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHodler="Searh a Monster"
        className="monsters-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFeild: "",
//     };
//   }
//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => res.json())
//       .then((res) =>
//         this.setState(
//           () => {
//             return { monsters: res };
//           },
//           () => {
//             console.log(this.state.monsters);
//           }
//         )
//       );
//   }
//   onSearchChange = (search) => {
//     const searchFeild = search.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFeild };
//     });
//   };
//   render() {
//     const { searchFeild, monsters } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((mon) =>
//       mon.name.toLowerCase().includes(searchFeild)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeHodler="Searh a Monster"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
