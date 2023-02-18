function Checkout({ setCart }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    e.target.reset();
    setCart([]);
  };
  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" id="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" id="lastName" />
        </label>
        <label>
          Email
          <input type="email" id="Email" />
        </label>
        <label>
          Credit Card
          <input type="number" id="creditCard" />
        </label>
        <label>
          Zip Code
          <input pattern="[0-9]*" type="text" id="zipcode" />
        </label>
        <input placeholder="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Checkout;
