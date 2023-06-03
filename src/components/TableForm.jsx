import { Fragment, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TiDeleteOutline, TiEdit } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  totalAmount,
  setTotalAmount,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Calculate amount
  useEffect(() => setAmount(quantity * price), [price, quantity, setAmount]);

  const createRow = e => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      toast.info('Please fill in all inputs ');
      return;
    }

    const newItems = {
      id: nanoid(5),
      description,
      quantity,
      price,
      amount,
    };
    setDescription('');
    setQuantity('');
    setPrice('');
    setAmount('');
    setIsEditing(false);
    setList([...list, newItems]);
  };

  const deleteRow = id => setList(list.filter(item => item.id !== id));

  const editRow = id => {
    const editingRow = list.find(item => item.id === id);
    setList(list.filter(item => item.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Calculate totalAmount
  useEffect(() => {
    const amountElements = document.querySelectorAll('.amount');
    let sum = 0;
    amountElements.forEach(element => {
      const value = parseInt(element.innerHTML);
      sum += isNaN(value) ? 0 : value;
    });

    setTotalAmount(sum);
  });

  return (
    <>
      <ToastContainer autoClose={3000} />
      <form onSubmit={createRow}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 bg-purple-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all duration-300"
        >
          {isEditing ? 'Editing Row item' : 'Add Table Item'}
        </button>
      </form>
      {/* Table items */}
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td className="flex justify-around items-center">
                  <button onClick={() => deleteRow(id)}>
                    <TiDeleteOutline className="text-red-500 font-bold text-xl" />
                  </button>
                  <button onClick={() => editRow(id)}>
                    <TiEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </Fragment>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold mb-10">
          Total: $ {totalAmount.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default TableForm;
