import { Fragment } from 'react';

function Table({ list, totalAmount, selectedCurrency }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Currency</td>
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
                <td>{selectedCurrency}</td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold mb-10">
          Total: {selectedCurrency} {totalAmount.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default Table;
