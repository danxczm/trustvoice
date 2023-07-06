// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FormInvoice from './FormInvoice';
import ViewInvoice from './ViewInvoice';

export const App = () => {
  return (
    <>
      <main
        className="m-5 p-10 w-screen"
        style={{
          maxWidth: '1920px',
          margin: 'auto',
        }}
      >
        <Routes>
          <Route path="/trustvoice" element={<FormInvoice />} />
          <Route path="/homePage" element={<div>Welcome to Trusty Plus</div>} />
          <Route path="/invoice" element={<ViewInvoice />} />
          <Route path="*" element={<div>There is no such page</div>} />
        </Routes>
      </main>
    </>
  );
};
