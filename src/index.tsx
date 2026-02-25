import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import 'tailwindcss/tailwind.css'
import App from 'App'
import { store } from './store'
import { CART_STORAGE_KEY } from 'utils/constants'

import './styles.css'

let storedItems = store.getState().cart.items

store.subscribe(() => {
  const currentItems = store.getState().cart.items
  if (storedItems !== currentItems) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentItems))
    storedItems = currentItems
  }
})

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
