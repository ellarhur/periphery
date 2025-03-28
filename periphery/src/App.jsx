import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header.jsx'
import './app.css'

function App() {
  return (
    <>
    <Header />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default App;