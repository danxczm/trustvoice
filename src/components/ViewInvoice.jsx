import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ClientDetails from './ClientDetails';
import Dates from './Dates';
import Footer from './Footer';
import MainDetails from './MainDetails';
import Notes from './Notes';
import Table from './Table';
import { Link } from 'react-router-dom';

function ViewInvoice() {
  const componentRef = useRef();

  return (
    <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
      <div className="flex">
        <Link
          className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
          to="/"
        >
          Back
        </Link>
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 block ml-auto mr-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
              Print / Save
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div ref={componentRef} className="p-5">
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
      </div>
    </div>
  );
}

export default ViewInvoice;
