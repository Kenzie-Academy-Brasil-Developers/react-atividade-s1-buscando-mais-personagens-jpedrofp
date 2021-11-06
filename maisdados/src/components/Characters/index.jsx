import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ chars, page, setPage}) => {

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <div className="botoes">
    <button onClick={() => setPage(page - 1)}>Previous Page</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
      <div className="container">
        {chars.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Characters;
