export default function PokemonCard() {
  //   const pokemon = pokemonList[0].name;
  //   const img = pokemonList[0].imgSrc;
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Item name={pokemon.name} img={pokemon.imgSrc} />
      ))}
    </div>
  );
}
function Item({ name, img }) {
  return (
    <div>
      <figure>
        {img ? <img src={img} alt={name} /> : <p>???</p>}

        <figcaption>{name}</figcaption>
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
