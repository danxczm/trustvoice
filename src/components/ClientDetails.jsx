import { useSelector } from 'react-redux';

function ClientDetails() {
  const { clientName, clientAddress } = useSelector(state => state.invoice);
  return (
    <section className="mt-10">
      <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
      <p>{clientAddress}</p>
    </section>
  );
}

export default ClientDetails;
