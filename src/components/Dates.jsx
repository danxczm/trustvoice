import { useSelector } from 'react-redux';

function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useSelector(
    state => state.invoice
  );

  return (
    <article className="mt-10 mb-14 flex flex-col items-end justify-end">
      <ul>
        <li className="p-2">
          <span className="font-bold">Invoice number: </span>
          {invoiceNumber}
        </li>
        <li className="p-2 bg-gray-100">
          <span className="font-bold">Invoice date: </span>
          {invoiceDate}
        </li>
        <li className="p-2">
          <span className="font-bold">Due date: </span>
          {dueDate}
        </li>
      </ul>
    </article>
  );
}

export default Dates;
