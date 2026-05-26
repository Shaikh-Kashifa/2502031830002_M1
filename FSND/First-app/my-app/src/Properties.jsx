function Properties({ name = "Guest", age = 20, city = "Unknown" }) {
  return (
    <>
      <h2>Hii {name}</h2>
      <h4>Age: {age}</h4>
      <h4>City: {city}</h4>
    </>
  );
}

export default Properties;
