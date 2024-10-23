interface PokemonProp {
  img: string;
  name: string;
}
function PokemonCard({ img, name }: PokemonProp) {
  return (
    <div>
      <figure>
        {img ? <img src={img} alt={name} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}
export default PokemonCard;
