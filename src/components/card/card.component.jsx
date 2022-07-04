import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { id, email, name } = this.props.monster;
//     return (
//       <div key={id} className="card-container">
//         <img
//           alt={name}
//           src={`https://robohash.org/${id}?set=set2&size=150x150`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
const Card = (props) => {
  const { id, email, name } = props.monster;
  return (
    <div key={id} className="card-container">
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set2&size=150x150`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
