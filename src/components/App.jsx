import { useRef, useState } from 'react';
import ClientDetails from './ClientDetails';
import Dates from './Dates';
import Footer from './Footer';
import MainDetails from './MainDetails';
import Notes from './Notes';
import Table from './Table';
import TableForm from './TableForm';
import ReactToPrint from 'react-to-print';

export const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const componentRef = useRef();
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');

  return (
    <>
      <main className="p-10 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
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
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
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
            </div>
            <button
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              Edit information
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your full name"
                  autoComplete="off"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  autoComplete="off"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter your link"
                  autoComplete="off"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Bank name</label>
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
                <label htmlFor="bankAccount">Bank account number</label>
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
                <label htmlFor="clientName">Client`s name</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter client`s name"
                  autoComplete="off"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress">Client`s address</label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter client`s address"
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
                  placeholder="Enter the invoice number"
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
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
            </article>

            <label htmlFor="notes">Notes</label>
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
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
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
