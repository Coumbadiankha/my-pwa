import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as sw from "./serviceWorkerRegistration"

sw.register();
const App =() => {
  return(
    <div>Hello</div>
  );
};

ReactDOM.render(
  
  <App />,
  document.getElementById('root')
);

