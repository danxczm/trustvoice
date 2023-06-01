function ClientDetails({ clientName, clientsAddress }) {
  return (
    <section className="mt-5">
      <h2 className="text-xl uppercase">{clientName}</h2>
      <p>{clientsAddress}</p>
    </section>
  );
}

export default ClientDetails;
