import React from 'react';
import ReactDom from 'react-dom';
import indexStyle  from './test.css'

if(module.hot) {
  module.hot.accept(()=>{
    ReactDom.render(
      <div>
      aaaaaaaaaaaaaaaaaaaaaagasegsdfsdfddddddddgfgd
    <h1 className={indexStyle.main}>fdhusdfsda</h1>
    <h2>hdafuhgadfuhgidfg</h2></div>,
      document.getElementById('root')
    )
  })
}


ReactDom.render(
  <div>
    sdafsgafgdafgssssssssssssssssssgfgd
  <h1 className={indexStyle.main}>fdhusdfsda</h1>
  <h2>hdafuhgadfuhgidfg</h2></div>,
  document.getElementById('root')
)