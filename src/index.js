import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './app.js'
import {Provider} from 'react-redux'

if(module.hot) {
  module.hot.accept(()=>{
    ReactDom.render(

      <BrowserRouter><App /></BrowserRouter>,
      document.getElementById('root')
    )
  })
}

ReactDom.render(
<BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
)