import { useState } from "react";
import BirdCard from "./Components/BirdCard";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  function removeBird(birdie) {
    const filteredBirdList = cart.filter((el) => el.id !== birdie);
    setCart(filteredBirdList);
  }

  function addBirds(bird) {
    setCart([...cart, { ...bird }]);
  }

  return (
    <div>
      <div className="birds">
        {birdData.map((bird) => {
          return (
            <BirdCard
              className="card"
              setCart={setCart}
              bird={bird}
              key={bird.id}
              addBirds={addBirds}
            />
          );
        })}
      </div>
      <div className="Cart">
        <Cart removeBird={removeBird} cart={cart} />
      </div>
      <div className="Checkout">
        <Checkout setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
