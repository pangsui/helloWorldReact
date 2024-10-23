import "./Home.css";
import PokemonCard from "./components/PokemonCard";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    id: 1,
  },
  {
    name: "mew",
    id: 2,
  },
];
function App() {
  return (
    <div className="app">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          img={pokemon.imgSrc}
          key={pokemon.id}
        />
      ))}
    </div>
  );
}

export default App;
