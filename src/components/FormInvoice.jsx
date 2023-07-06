import { NavLink } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import TableForm from './TableForm';
import { useDispatch, useSelector } from 'react-redux';

function FormInvoice() {
  const [searchParams] = useSearchParams();
  const {
    name: nameURL,
    address: addressURL,
    email: emailURL,
    phone: phoneURL,
    website: websiteURL,
    bankName: bankNameURL,
    bankAccount: bankAccountURL,
    clientName: clientNameURL,
    clientAddress: clientAddressURL,
    invoiceNumber: invoiceNumberURL,
    invoiceDate: invoiceDateURL,
    dueDate: dueDateURL,
    notes: notesURL,
  } = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const dispatch = useDispatch();
  const {
    name: nameRedux,
    address: addressRedux,
    email: emailRedux,
    phone: phoneRedux,
    website: websiteRedux,
    bankName: bankNameRedux,
    bankAccount: bankAccountRedux,
    clientName: clientNameRedux,
    clientAddress: clientAddressRedux,
    invoiceNumber: invoiceNumberRedux,
    invoiceDate: invoiceDateRedux,
    dueDate: dueDateRedux,
    notes: notesRedux,
  } = useSelector(state => state.invoice);

  const handleSaveForm = () => {
    dispatch({
      type: 'setFormData',
      payload: {
        name,
        address,
        email,
        phone,
        bankName,
        bankAccount,
        website,
        clientName,
        clientAddress,
        invoiceNumber,
        invoiceDate,
        dueDate,
        notes,
      },
    });
  };

  const [name, setName] = useState(nameURL || nameRedux || '');
  const [address, setAddress] = useState(addressURL || addressRedux || '');
  const [email, setEmail] = useState(emailURL || emailRedux || '');
  const [phone, setPhone] = useState(phoneURL || phoneRedux || '');
  const [website, setWebsite] = useState(websiteURL || websiteRedux || '');
  const [bankName, setBankName] = useState(bankNameURL || bankNameRedux || '');
  const [bankAccount, setBankAccount] = useState(
    bankAccountURL || bankAccountRedux || ''
  );
  const [clientName, setClientName] = useState(
    clientNameURL || clientNameRedux || ''
  );
  const [clientAddress, setClientAddress] = useState(
    clientAddressURL || clientAddressRedux || ''
  );
  const [invoiceNumber, setInvoiceNumber] = useState(
    invoiceNumberURL || invoiceNumberRedux || ''
  );
  const [invoiceDate, setInvoiceDate] = useState(
    invoiceDateURL || invoiceDateRedux || ''
  );
  const [dueDate, setDueDate] = useState(dueDateURL || dueDateRedux || '');
  const [notes, setNotes] = useState(notesURL || notesRedux || '');

  useEffect(() => {
    const urlParams = new URLSearchParams();
    urlParams.append('name', name);
    urlParams.append('address', address);
    urlParams.append('email', email);
    urlParams.append('phone', phone);
    urlParams.append('bankName', bankName);
    urlParams.append('bankAccount', bankAccount);
    urlParams.append('website', website);
    urlParams.append('clientName', clientName);
    urlParams.append('clientAddress', clientAddress);
    urlParams.append('invoiceNumber', invoiceNumber);
    urlParams.append('invoiceDate', invoiceDate);
    urlParams.append('dueDate', dueDate);
    urlParams.append('notes', notes);

    // const searchParams = urlParams.toString();
    // console.log(`searchParams: `, searchParams);
    // window.history.replaceState(null, '', `?${searchParams}`);
  }, [
    name,
    address,
    email,
    phone,
    bankName,
    bankAccount,
    website,
    clientName,
    clientAddress,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes,
  ]);

  return (
    <div className="bg-white p-10 rounded shadow rounded-2xl border-4 border-blue-200">
      <div className="bg-white p-5 rounded shadow">
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
            <TableForm />
          </article>

          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Additional notes to the client"
            value={notes}
            onChange={e => setNotes(e.target.value)}
          ></textarea>
        </div>
        <NavLink
          to="/invoice"
          onClick={handleSaveForm}
          className="bg-blue-500 flex justify-center block ml-auto text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        >
          View invoice
        </NavLink>
      </div>
    </div>
  );
}

export default FormInvoice;

// http://localhost:3000/formData?name=test&address=test&email=test&phone=11111&bankName=test&bankAccount=test&website=test&clientName=test&clientAddress=test&invoiceNumber=&invoiceDate=&dueDate=&notes=
