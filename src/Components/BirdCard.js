function BirdCard({ bird, addBirds }) {
  // const { img, name, amount, addBirds } = props.bird;

  return (
    <div className="card">
      <h1>{bird.name}</h1>
      <p>${bird.amount}</p>
      <img alt={bird.name} src={bird.img} />
      <button className="birds" onClick={() => addBirds(bird)}>
        Adopt
      </button>
    </div>
  );
}

export default BirdCard;
