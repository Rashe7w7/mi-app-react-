import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lab4 from './AppLab4.jsx';
import "./lab4index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lab4/>
  </StrictMode>,
)
