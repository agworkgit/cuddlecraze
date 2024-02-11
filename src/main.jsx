import { createRoot } from 'react-dom/client';
import { App } from './App';
import PetsPage from './pages/PetsPage/PetsPage';
const container = document.getElementById('root');
const root = createRoot(container);

//root.render(<App tab='home' />);
root.render(<PetsPage />);