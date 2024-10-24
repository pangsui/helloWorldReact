function NavBar({ pokemonIndex, handleNext, handlePrevious, pokemonList }) {
  return (
    <div className="display-pokemon">
      {pokemonIndex > 0 ? (
        <button className="pokman-btn" type="button" onClick={handlePrevious}>
          Précédent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button className="pokman-btn" type="button" onClick={handleNext}>
          Suivant
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
