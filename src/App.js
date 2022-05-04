import { HashRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
