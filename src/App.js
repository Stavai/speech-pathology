import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav';
import { CredentialsContextProvider } from './contexts/current-user-context';

function App() {
  return (
    <CredentialsContextProvider>
      <div style={{
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
        className="App"
      >
        <Navigation />
        <Outlet />
      </div>
    </CredentialsContextProvider>
  );
}

export default App;
