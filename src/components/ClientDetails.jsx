function ClientDetails({ clientName, clientsAddress }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
      <p>{clientsAddress}</p>
    </section>
  );
}

export default ClientDetails;
