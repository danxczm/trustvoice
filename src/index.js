import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ApolloProvider } from '@apollo/client';
// import client from 'apollo/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ApolloProvider client={client}>
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  // </ApolloProvider>
);

// query ExampleQuery {
//    widgetRates(currencyCodesArray: ["BTC", "ETH"], deviceId: "anythingForDifferentClients")
// }

// curl --request GET \
//   --header 'content-type: application/json' \
//   --url 'https://apollo.trusteeglobal.com/graphql' \
//   --data '{"query":"query { __typename }"}'
