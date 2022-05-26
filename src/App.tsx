import React from 'react';
import RouteOfPages from './components/pagination/RouteOfPages';
import { MsalProvider } from '@azure/msal-react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="text-center">
      <Provider store={store}>
        <RouteOfPages />
      </Provider>
    </div>
  );
}

export default App;
