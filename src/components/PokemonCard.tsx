export default function PokemonCard({ pokemonList }) {
  console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Item name={pokemon.name} img={pokemon.imgSrc} key={pokemon.name} />
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
