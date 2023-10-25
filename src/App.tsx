import { RouterProvider } from 'react-router-dom';
import router from './components/Router';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo.config';

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
