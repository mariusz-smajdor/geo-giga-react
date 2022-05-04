import { HashRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Regions from './pages/Regions';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flags' element={<Regions />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
