function Notes({ notes }) {
  return (
    <section className="mt-10 mb-5">
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
      <p className="lg:w-1/2 text-justify">{notes}</p>
    </section>
  );
}

export default Notes;
