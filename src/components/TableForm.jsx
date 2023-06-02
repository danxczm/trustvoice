import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Table from './Table';

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
}) {
  useEffect(() => setAmount(quantity * price), [price, quantity, setAmount]);

  const handleSubmit = e => {
    e.preventDefault();
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
    setList([...list, newItems]);
    console.log(`newItems: `, newItems);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          Add Table Item
        </button>
      </form>
      {/* Table items */}
      <Table
        description={description}
        quantity={quantity}
        price={price}
        amount={amount}
        list={list}
        setList={setList}
      />
    </>
  );
}

export default TableForm;
