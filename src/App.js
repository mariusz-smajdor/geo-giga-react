import { HashRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/layout/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<></>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
