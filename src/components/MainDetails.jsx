import { useSelector } from 'react-redux';

function MainDetails() {
  const { name, address } = useSelector(state => state.invoice);

  return (
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-xl uppercase mb-1 md:text-4xl">{name}</h2>
      <p>{address}</p>
    </section>
  );
}
export default MainDetails;
