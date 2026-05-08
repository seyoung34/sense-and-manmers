import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initGa } from './lib/analytics';
import './styles.css';

initGa();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
