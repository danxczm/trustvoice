import { useState } from 'react';
import ClientDetails from './ClientDetails';
import Dates from './Dates';
import Footer from './Footer';
import Header from './Header';
import MainDetails from './MainDetails';
import Notes from './Notes';
import Table from './Table';
import TableForm from './TableForm';

export const App = () => {
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, setName] = useState('Dan Danillo');
  const [address, setAddress] = useState('Ukraine, Kyiv');
  const [email, setEmail] = useState('dandanbohdan@gmail.com');
  const [phone, setPhone] = useState('+38068394656');
  const [bankName, setBankName] = useState('Mono Bank');
  const [bankAccount, setBankAccount] = useState('1234 1231 1231 1232');
  const [website, setWebsite] = useState('https://trusteeglobal.com/');
  const [clientName, setClientName] = useState('WhiteBit');
  const [clientAddress, setClientAddress] = useState('Ukraine, Kyiv');
  const [invoiceNumber, setInvoiceNumber] = useState('124');
  const [invoiceDate, setInvoiceDate] = useState('02.07.23');
  const [dueDate, setDueDate] = useState('02.08.23');
  const [notes, setNotes] = useState('Pay as soon as posible');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handlePrint = _ => window.print();
  return (
    <>
      <main className="p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientName={clientName}
              clientsAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccoun={bankAccount}
              bankName={bankName}
            />
            <button
              className="mt-5 bg-purple-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              Edit information
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Enter your full name</label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Full name"
                  autoComplete="off"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Enter your address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  autoComplete="off"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Enter your phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone"
                  autoComplete="off"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website">Enter your website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Your website"
                  autoComplete="off"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter your bank name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter your bank name"
                  autoComplete="off"
                  value={bankName}
                  onChange={e => setBankName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Enter your bank account number
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter your bank account number"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={e => setBankAccount(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">Enter client`s` name</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter client`s` name"
                  autoComplete="off"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress">Enter client`s` address</label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter client`s` address"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={e => setClientAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Enter your bank invoice number"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={e => setInvoiceNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Enter your bank account number"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={e => setInvoiceDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Enter your bank account number"
                  autoComplete="off"
                  value={dueDate}
                  onChange={e => setDueDate(e.target.value)}
                />
              </div>
            </article>

            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            </article>

            <label htmlFor="notes">Additional notes</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Additional notes to the client"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            ></textarea>
            <button
              className="mt-5 bg-purple-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all duration-300"
              onClick={() => setShowInvoice(true)}
            >
              Preview Invoice
            </button>
          </div>
        )}
      </main>
    </>
  );
};
