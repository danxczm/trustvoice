import CurrencyDropdown from './CurrencyDropdown';
import { Fragment, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TiDeleteOutline, TiEdit } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

function TableForm() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const { list } = useSelector(state => state.invoice);

  // Calculate amount
  useEffect(() => setAmount(quantity * price), [price, quantity]);

  // function which sends action
  const setList = list => {
    dispatch({ type: 'setList', payload: list });
  };

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

    setList([...list, newItems]);

    setDescription('');
    setQuantity('');
    setPrice('');
    setAmount('');
    setIsEditing(false);
  };

  const deleteRow = id => {
    setList(list.filter(item => item.id !== id));
  };

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
    dispatch({ type: 'setTotalAmount', payload: sum });
  }, [quantity, price, dispatch]);

  useEffect(() => {
    if (list.length === 0) setTotalAmount(0);
  }, [list]);

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
            placeholder="Enter the description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-centre justify-center">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Enter the quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-centre justify-center">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Enter the price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="Amount"></label>
            <p className="flex justify-center items-center font-bold text-xl">
              {amount.toLocaleString()}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
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
            <td className="font-bold flex items-centre justify-center">Edit</td>
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
        <h2 className="flex items-centre justify-end text-gray-800 text-xl font-bold mb-10">
          Total: <CurrencyDropdown /> {totalAmount.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default TableForm;
