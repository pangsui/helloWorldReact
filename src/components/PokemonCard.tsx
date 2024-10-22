export default function PokemonCard() {
  const pokemon = pokemonList[0].name;
  const img = pokemonList[0].imgSrc;
  return (
    <div>
      <figure>
        <img src={img} alt={pokemon} />
        <figcaption>{pokemon}</figcaption>
      </figure>
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
