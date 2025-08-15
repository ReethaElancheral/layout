import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './components/context/WishlistContext.jsx'
import { CartProvider } from './components/context/CartContext.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
  <WishlistProvider>
    <AuthProvider>
<App />
</AuthProvider>
  </WishlistProvider>
  </CartProvider>
    

  </StrictMode>,
)
