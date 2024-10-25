import "./Home.css";
import PokemonCard from "./components/PokemonCard";
function App() {
  return (
    <div className="app">
      <PokemonCard pokemon={pokemonList} />
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default App;
