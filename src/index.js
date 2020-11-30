import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";
import App from './components/App';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ["Lora:400,500,600", "Galada:400", "serif", "Patua One: 400", "Raleway:400"],
  }
})
