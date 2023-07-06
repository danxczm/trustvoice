import { combineReducers } from 'redux';
import { initialState } from './initialState';

const invoiceReducer = (state = initialState.invoice, action) => {
  switch (action.type) {
    case 'setList':
      return { ...state, list: action.payload };
    case 'setSymbol':
      return { ...state, selectedSymbol: action.payload };
    case 'setFormData':
      return { ...state, ...action.payload };
    case 'setTotalAmount':
      return { ...state, totalAmount: action.payload };
    default:
      return state;
  }
};

export const reducer = combineReducers({ invoice: invoiceReducer });
