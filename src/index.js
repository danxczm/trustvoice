import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      {/* <FetchData /> */}
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

// query ExampleQuery {
//    widgetRates(currencyCodesArray: ["BTC", "ETH"], deviceId: "anythingForDifferentClients")
// }

// curl --request GET \
//   --header 'content-type: application/json' \
//   --url 'https://apollo.trusteeglobal.com/graphql' \
//   --data '{"query":"query { __typename }"}'
