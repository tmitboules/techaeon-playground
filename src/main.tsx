import React from 'react'
import ReactDOM from 'react-dom/client'
import AnimationApp from './AnimationApp'
import SelectShape from './SelectShape'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AnimationApp></AnimationApp> */}
      <SelectShape></SelectShape>
  {/* <selectShape></selectShape> */}
  </React.StrictMode>,

)
