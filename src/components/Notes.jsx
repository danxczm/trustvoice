import { useSelector } from 'react-redux';

function Notes() {
  const { notes } = useSelector(state => state.invoice);
  return (
    <section className="mt-10 mb-5">
      <p className="lg:w-1/2">{notes}</p>
    </section>
  );
}

export default Notes;
