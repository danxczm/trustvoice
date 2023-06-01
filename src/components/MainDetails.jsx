function MainDetails({ name, address }) {
  return (
    <section className="flex flex-col items-end justify-end">
      {/* <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your name"
            required
          /> */}
      <h2 className="font-bold text-xl uppercase md:text-4xl">{name}</h2>
      <p> {address}</p>
    </section>
  );
}

export default MainDetails;
