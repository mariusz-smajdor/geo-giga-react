import { HashRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import Regions from './pages/Regions';
import Flags from './pages/Flags';
import StreetView from './pages/StreetView';
import { regions } from './regions';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flags' element={<Regions />} />
        {regions.map(region => (
          <Route key={region.id} path={`/flags/:region`} element={<Flags />} />
        ))}
        <Route path='/street-view' element={<Regions />} />
        {regions.map(region => (
          <Route
            key={region.id}
            path={`/street-view/:region`}
            element={<StreetView />}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default App;
