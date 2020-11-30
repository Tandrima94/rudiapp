import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ["Lora:400,500,600", "Galada:400", "serif", "Patua One: 400", "Raleway:400"],
  }
})
