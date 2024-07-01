import React from 'react';
import Header from './layouts/Header/Header';
import LoginRoutes from './layouts/Routers/loginRoutes';
import AppRouters from './layouts/Routers/Routers';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <div className="partDashboard">
        {token ? <>
          <Header />
        <AppRouters />
         </>: 
         <LoginRoutes />}
      </div>
    </div>
  );
}

export default App;
