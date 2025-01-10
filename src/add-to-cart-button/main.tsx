import React from 'react'
import ReactDOM from 'react-dom/client'
import {AddToCartButton} from './AddToCartButton'

ReactDOM.createRoot(document.getElementById('add-to-cart-button')!).render(
  <React.StrictMode>
    <AddToCartButton />
  </React.StrictMode>,
)
