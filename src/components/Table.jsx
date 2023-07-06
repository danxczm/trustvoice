import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const { list, totalAmount, selectedSymbol } = useSelector(
    state => state.invoice
  );
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-black text-white p-1">
            <td className="font-bold border-l-2">Description</td>
            <td className="font-bold border-l-2">Quantity</td>
            <td className="font-bold border-l-2">Price</td>
            <td className="font-bold border-l-2">Amount</td>
            <td className="font-bold border-l-2">Currency</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <Fragment key={id}>
            <tbody>
              <tr className="my-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{Number(price).toLocaleString()}</td>
                <td>{Number(amount).toLocaleString()}</td>
                <td>{selectedSymbol}</td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold mb-10">
          Total: {selectedSymbol} {totalAmount.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default Table;
