import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lab3 from './AppLab3.jsx';
import "./lab3index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lab3/>
  </StrictMode>,
)
