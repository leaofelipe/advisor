import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Theme } from '@radix-ui/themes'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme
        appearance="light"
        accentColor="indigo"
        grayColor="slate"
        radius="medium"
        scaling="100%"
      >
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
)
