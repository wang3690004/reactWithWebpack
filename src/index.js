import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from 'react-router-dom'
import App from './app.js'
import {Provider} from 'react-redux'
import store from './redux/store'

if(module.hot) {
  module.hot.accept(()=>{
    ReactDom.render(
      <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
      </Provider>,
      document.getElementById('root')
    )
  })
}

ReactDom.render(
  <Provider store={store}>
<HashRouter><App /></HashRouter>
</Provider>,
  document.getElementById('root')
)