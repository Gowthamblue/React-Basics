import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Voting from './Voting.jsx';
const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <Voting />
  </StrictMode>
);
